import { AlertTriangle } from "lucide-react";
import React from "react";

export type EntityType = "Empresa" | "Vehículo" | "Persona Física";
export type EntityStatus = "Activa" | "Activo" | "Inactiva";

export type Entity = {
  id: number;
  name: string;
  subtitle: string;
  type: EntityType;
  status: EntityStatus;
  identifierLabel: string;
  identifierValue: string;
  documents: string;
  expirationLabel: string;
  expirationValue: string;
  hasAlert?: boolean;
};

type Props = {
  entity: Entity;
  Icon: React.ElementType;
  getIconStyles: (type: EntityType) => string;
  getStatusStyles: (status: EntityStatus) => string;
};

export default function EntityCard({
  entity,
  Icon,
  getIconStyles,
  getStatusStyles,
}: Props) {
  return (
    <article
      className={[
        "border bg-white p-6 shadow-sm",
        entity.hasAlert ? "border-red-200" : "border-slate-300",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className={[
              "flex h-11 w-11 items-center justify-center",
              getIconStyles(entity.type),
            ].join(" ")}
          >
            <Icon size={24} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950">{entity.name}</h2>
            <p className="text-sm text-slate-600">{entity.subtitle}</p>
          </div>
        </div>

        {entity.hasAlert ? (
          <span className="rounded-xl bg-red-100 px-4 py-2 text-xs font-bold text-red-700">
            Con <br /> Alertas
          </span>
        ) : (
          <span
            className={[
              "rounded-full px-3 py-1 text-xs font-bold",
              getStatusStyles(entity.status),
            ].join(" ")}
          >
            ● {entity.status}
          </span>
        )}
      </div>

      <hr className="my-6 border-slate-200" />

      {/* Identificador */}
      <div className="flex items-center justify-between">
        <span className="text-slate-600">{entity.identifierLabel}</span>
        <span className="font-medium text-slate-950">
          {entity.identifierValue}
        </span>
      </div>

      {/* Datos */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold text-slate-700">Documentos</p>
          <p className="mt-2 text-lg font-bold text-slate-950">
            {entity.documents}
          </p>
        </div>

        <div
          className={[
            "border p-4",
            entity.hasAlert
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-slate-200 bg-slate-50",
          ].join(" ")}
        >
          <p className="text-xs font-bold">{entity.expirationLabel}</p>

          <p className="mt-2 flex items-center gap-1 text-lg font-bold">
            {entity.hasAlert && <AlertTriangle size={16} />}
            {entity.expirationValue}
          </p>
        </div>
      </div>

      <hr className="my-6 border-slate-200" />

      <button className="h-12 w-full border border-slate-300 bg-white font-bold text-[#061b49] hover:bg-slate-50">
        Ver perfil
      </button>
    </article>
  );
}
