interface Dimensions {
    meters: number | null;
    feet: number | null;
}

interface Thrust {
    kN: number;
    lbf: number;
}

interface FirstStage {
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
}

interface SecondStage {
    thrust: Thrust;
    payloads: {
        composite_fairing: Dimensions;
        option_1: string;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
}

interface ISP {
    sea_level: number;
    vacuum: number;
}

interface Engines {
    isp: ISP;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    number: number;
    type: string;
    version: string;
    layout: string | null;
    engine_loss_max: number | null;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
}

interface LandingLegs {
    number: number;
    material: string | null;
}

interface PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

export interface IRocket {
    height: Dimensions;
    diameter: Dimensions;
    mass: {
        kg: number;
        lb: number;
    };
    first_stage: FirstStage;
    second_stage: SecondStage;
    engines: Engines;
    landing_legs: LandingLegs;
    payload_weights: PayloadWeight[];
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    wikipedia: string;
    description: string;
    id: string;
}


interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
}

interface Patch {
    small: string | null;
    large: string | null;
}

interface Reddit {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
}

interface Flickr {
    small: string[];
    original: string[];
}

interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
}

interface Dragon {
    capsule: string | null;
    mass_returned_kg: number | null;
    mass_returned_lbs: number | null;
    flight_time_sec: number | null;
    manifest: string | null;
    water_landing: boolean | null;
    land_landing: boolean | null;
}

interface Payload {
    dragon: Dragon;
    name: string;
    type: string;
    reused: boolean;
    launch: string;
    customers: string[];
    norad_ids: string[];
    nationalities: string[];
    manufacturers: string[];
    mass_kg: number | null;
    mass_lbs: number | null;
    orbit: string;
    reference_system: string;
    regime: string;
    longitude: number | null;
    semi_major_axis_km: number | null;
    eccentricity: number | null;
    periapsis_km: number | null;
    apoapsis_km: number | null;
    inclination_deg: number | null;
    period_min: number | null;
    lifespan_years: number | null;
    epoch: string | null;
    mean_motion: number | null;
    raan: string | null;
    arg_of_pericenter: string | null;
    mean_anomaly: string | null;
    id: string;
}

interface CoreDetails {
    block: number | null;
    reuse_count: number;
    rtls_attempts: number;
    rtls_landings: number;
    asds_attempts: number;
    asds_landings: number;
    last_update: string | null;
    launches: string[];
    serial: string;
    status: string;
    id: string;
}

interface Core {
    core: CoreDetails;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
}

interface Rocket {
    name: string;
    id: string;
}

interface Launchpad {
    images: {
        large: string[];
    };
    name: string;
    full_name: string;
    locality: string;
    region: string;
    latitude: number;
    longitude: number;
    launch_attempts: number;
    launch_successes: number;
    rockets: string[];
    timezone: string;
    launches: string[];
    status: string;
    details: string | null;
    id: string;
}

interface Doc {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: Rocket;
    success: boolean | null;
    failures: any[];
    details: string | null;
    crew: any[];
    ships: string[];
    capsules: string[];
    payloads: Payload[];
    launchpad: Launchpad;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
}

export interface IPaginatedResponse {
    docs: Doc[];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}