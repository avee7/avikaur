import { Base } from "./Base";

export const Semantic = {
  fg: {
    default: Base.colour.grey['50'],
    muted: Base.colour.grey['300'],
    accent: Base.colour.azureBlue['500'],
    success: Base.colour.green['500'],
    error: Base.colour.red['500'],
    disabled: Base.colour.grey['500']
  },
  bg: {
    default: Base.colour.midnightBlue['900'],
    muted: Base.colour.midnightBlue['700'],
    accent: Base.colour.azureBlue['500'],
    success: Base.colour.green['100'],
    error: Base.colour.red['100'],
    disabled: Base.colour.grey['200'],
    inverse: Base.colour.midnightBlue['100']
  },
  border: {
    default: Base.colour.midnightBlue['900'],
    muted: Base.colour.azureBlue['700'],
    accent: Base.colour.azureBlue['500'],
    error: Base.colour.red['500'],
    disabled: Base.colour.grey['500']
  }
};