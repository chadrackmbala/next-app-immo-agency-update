"use client";

import { useMemo, useState, useEffect, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import { FaImage } from "react-icons/fa";

type UploadMediaProps = {
  onChange?: (files: File[]) => void;
};

export default function UploadMedia({ onChange }: UploadMediaProps) {
  const [files, setFiles] = useState<File[]>([]);

  const previews = useMemo(
    () =>
      files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        type: file.type,
      })),
    [files]
  );

  useEffect(() => {
    return () => {
      previews.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [previews]);

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []) as File[];
    const nextFiles = [...files, ...selectedFiles].slice(0, 10);
    setFiles(nextFiles);
    onChange?.(nextFiles);
    event.target.value = "";
  };

  const removeFile = (index: number) => {
    const nextFiles = files.filter((_, i) => i !== index);
    setFiles(nextFiles);
    onChange?.(nextFiles);
  };

  return (
    <div className="w-full rounded-[20px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-3">
          <FaImage className="text-[#008B8B] w-5 h-5" />
          <h3 className="text-lg font-semibold">Ajouter des médias</h3>
        </div>
        <p className="text-sm text-slate-500">
          Images et vidéos ensemble. Sélection multiple possible, jusqu’à 10 fichiers.
        </p>
      </div>

      <Button
        variant="contained"
        component="label"
        sx={{
          bgcolor: "#008B8B",
          textTransform: "capitalize",
          fontSize: "16px",
          px: 4,
          py: 1.2,
          '&:hover': { bgcolor: '#0f7880' },
        }}
      >
        Sélectionner des médias
        <input
          hidden
          accept="image/*,video/*"
          multiple
          type="file"
          onChange={handleFilesChange}
        />
      </Button>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
        <span>{files.length} média{files.length > 1 ? "s" : ""} sélectionné{files.length > 1 ? "s" : ""}</span>
        <span>Types pris en charge : images et vidéos</span>
      </div>

      {previews.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {previews.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              {item.type.startsWith("video/") ? (
                <video
                  controls
                  preload="metadata"
                  muted
                  playsInline
                  src={item.url}
                  className="h-56 w-full bg-black object-contain"
                >
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              ) : (
                <img
                  src={item.url}
                  alt={item.file.name}
                  className="h-56 w-full object-cover"
                />
              )}
              <div className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-slate-700">
                <div className="min-w-0 truncate">{item.file.name}</div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 transition hover:bg-slate-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          Aucun média sélectionné
        </div>
      )}
    </div>
  );
}
