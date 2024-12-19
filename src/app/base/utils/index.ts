import { Launches } from "../../types/launches";
import { Capsule } from "../../types/capsule";
import { Cores } from "../../types/core";
import { Payloads } from "../../types/payload";
import { StarLink } from "../../types/starlink";
import { Dragons } from "@/app/types/dargons";
import { LandPads } from "@/app/types/landpads";
import { Rockets } from "@/app/types/rockets";
import { LaunchPads } from "@/app/types/launchpads";
import { Ships } from "@/app/types/ships";
import { Crew } from "@/app/types/crew";

// 1. Create a combined union type that includes all your data types
type CombinedData = Launches | Capsule | Cores | Payloads | StarLink | Dragons | LandPads | Rockets | LaunchPads | Ships | Crew;

// 2. A generic function that can handle any of these types
export const processData = <T extends CombinedData>(data: unknown): T[] => {
  // Ensure data is an array
  const randomData = Array.isArray(data) ? data : [];

  // Filter out any items without a valid 'id'
  const filterData = randomData.filter(
    (item): item is T => typeof item === "object" && item !== null && "id" in item
  );

  // Return the filtered data, typed correctly as T[]
  return filterData;
};

// 3. Specific functions for each type

export const CapsulesData = (data: unknown): Capsule[] => {
  return processData<Capsule>(data);
};

export const CoresData = (data: unknown): Cores[] => {
  return processData<Cores>(data);
};

export const LauncheData = (data: unknown): Launches[] => {
  return processData<Launches>(data);
};

export const PayloadData = (data: unknown): Payloads[] => {
  return processData<Payloads>(data);
};

export const StarLinkData = (data: unknown): StarLink[] => {
  return processData<StarLink>(data);
};

export const DragonData = (data: unknown): Dragons[] => {
  return processData<Dragons>(data);
};

export const LandPadsData = (data: unknown): LandPads[] => {
  return processData<LandPads>(data);
};

export const RocketsData = (data: unknown): Rockets[] => {
  return processData<Rockets>(data);
};

export const LaunchPadsData = (data: unknown): LaunchPads[] => {
  return processData<LaunchPads>(data);
};

export const ShipsData = (data: unknown): Ships[] => {
  return processData<Ships>(data);
};

export const CrewData = (data: unknown): Crew[] => {
  return processData<Crew>(data);
};
