// src/features/entities/pages/EntitiesPage.tsx
import { Building2, Car, User, Search, Plus } from "lucide-react";
import EntityCard from "../components/entityCard";

type EntityStatus = "Activa" | "Activo" | "Inactiva";
type EntityType = "Empresa" | "Vehículo" | "Persona Física";

type Entity = {
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
  inactive?: boolean;
};

const entities: Entity[] = [
  {
    id: 1,
    name: "Transporte Austr...",
    subtitle: "Empresa",
    type: "Empresa",
    status: "Activa",
    identifierLabel: "CUIT",
    identifierValue: "30-12345678-9",
    documents: "12 / 12",
    expirationLabel: "Próx. Vencimiento",
    expirationValue: "15 Oct 2023",
  },
  {
    id: 2,
    name: "AB 123 CD",
    subtitle: "Vehículo • Toyota Hilux 2020",
    type: "Vehículo",
    status: "Activo",
    identifierLabel: "Patente",
    identifierValue: "AB123CD",
    documents: "4 / 5",
    expirationLabel: "Doc. Vencidos",
    expirationValue: "1",
    hasAlert: true,
  },
  {
    id: 3,
    name: "Juan Pérez",
    subtitle: "Persona Física",
    type: "Persona Física",
    status: "Activo",
    identifierLabel: "DNI",
    identifierValue: "32.456.789",
    documents: "3 / 3",
    expirationLabel: "Próx. Vencimiento",
    expirationValue: "01 Dic 2023",
  },
  {
    id: 4,
    name: "Logística Sur SRL",
    subtitle: "Empresa",
    type: "Empresa",
    status: "Inactiva",
    identifierLabel: "CUIT",
    identifierValue: "30-98765432-1",
    documents: "0 / 8",
    expirationLabel: "Próx. Vencimiento",
    expirationValue: "N/A",
    inactive: true,
  },
  {
    id: 5,
    name: "AC 456 EF",
    subtitle: "Vehículo • Ford Transit 2022",
    type: "Vehículo",
    status: "Activo",
    identifierLabel: "Patente",
    identifierValue: "AC456EF",
    documents: "5 / 5",
    expirationLabel: "Próx. Vencimiento",
    expirationValue: "20 Nov 2023",
  },
  {
    id: 6,
    name: "María González",
    subtitle: "Persona Física",
    type: "Persona Física",
    status: "Activa",
    identifierLabel: "DNI",
    identifierValue: "28.111.222",
    documents: "2 / 3",
    expirationLabel: "Faltantes",
    expirationValue: "1 Requerido",
  },
];

function getEntityIcon(type: EntityType) {
  if (type === "Empresa") return Building2;
  if (type === "Vehículo") return Car;
  return User;
}

function getIconStyles(type: EntityType) {
  if (type === "Empresa") return "bg-blue-100 text-slate-800";
  if (type === "Vehículo") return "bg-blue-100 text-slate-600";
  return "bg-orange-950 text-orange-300";
}

function getStatusStyles(status: EntityStatus) {
  if (status === "Inactiva") {
    return "bg-slate-200 text-slate-600";
  }

  return "bg-emerald-100 text-emerald-700";
}

export default function EntitiesPage() {
  return (
    <section className="space-y-6">
      {/* Header de la página */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Entidades</h1>
          <p className="mt-2 text-base text-slate-600">
            Empresas, vehículos y personas registradas
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-none bg-[#061b49] px-5 py-3 text-sm font-semibold text-white hover:bg-[#09245f]">
          <Plus size={18} />
          Crear entidad
        </button>
      </div>

      {/* Filtros */}
      <div className="border-b border-slate-300 pb-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_150px_150px_220px]">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Buscar por nombre, CUIT, DNI o patente"
              className="h-12 w-full border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none focus:border-[#061b49]"
            />
          </div>

          <select className="h-12 border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-[#061b49]">
            <option>Tipo de entidad</option>
            <option>Empresa</option>
            <option>Vehículo</option>
            <option>Persona</option>
          </select>

          <select className="h-12 border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-[#061b49]">
            <option>Estado general</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>

          <label className="flex h-12 items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" className="h-4 w-4 border-slate-300" />
            Solo con docs. vencidos
          </label>
        </div>
      </div>
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {entities.map((entity) => {
          const Icon = getEntityIcon(entity.type);

          return (
            <EntityCard
              key={entity.id}
              entity={entity}
              Icon={Icon}
              getIconStyles={getIconStyles}
              getStatusStyles={getStatusStyles}
            />
          );
        })}
      </div>
    </section>
  );
}
