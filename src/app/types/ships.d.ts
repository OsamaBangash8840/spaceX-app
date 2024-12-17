export interface Ships {
    last_ais_update: string | null;
    legacy_id: string;
    model: string | null;
    type: string;
    roles: string[];
    imo: number;
    mmsi: number;
    abs: number;
    class: number;
    mass_kg: number;
    mass_lbs: number;
    year_built: number;
    home_port: string;
    status: string;
    speed_kn: number | null;
    course_deg: number | null;
    latitude: number | null;
    longitude: number | null;
    link: string;
    image: string;
    name: string;
    active: boolean;
    launches: string[];
    id: string;
  }
  