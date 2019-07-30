import { Features } from "../core/enums";

type MainPowerIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type MainPowerFeature = {
  [key in typeof Features.PrimaryPower | typeof Features.SecondaryPower]?:
  MainPowerIndex | MainPowerIndex[]
};
export type AncillaryFeature = {
  [key in typeof Features.Ancillary]?: 1 | 2 | 3 | 4
};
export type IncarnatePowerFeature = {
  [key in typeof Features.AlphaPower | typeof Features.JudgementPower | typeof Features.DestinyPower | typeof Features.OmegaPower]?:
  void
};
export type Level = MainPowerFeature | AncillaryFeature | IncarnatePowerFeature;

export const Progression: Level[] = [
  /* 1*/{ [Features.PrimaryPower]: [1, 2], [Features.SecondaryPower]: [1, 2], },
  /* 2*/{ [Features.PrimaryPower]: 3 },
  /* 3*/{ [Features.SecondaryPower]: 3 },
  /* 4*/{ [Features.PrimaryPower]: 4 },
  /* 5*/{ [Features.Ancillary]: 1, [Features.SecondaryPower]: 4 },
  /* 6*/{ [Features.PrimaryPower]: 5 },
  /* 7*/{ [Features.SecondaryPower]: 5 },
  /* 8*/{ [Features.PrimaryPower]: 6 },
  /* 9*/{ [Features.SecondaryPower]: 6 },
  /*10*/{ [Features.PrimaryPower]: 7, [Features.Ancillary]: 2 },
  /*11*/{ [Features.SecondaryPower]: 7 },
  /*12*/{ [Features.PrimaryPower]: 8 },
  /*13*/{ [Features.SecondaryPower]: 8 },
  /*14*/{ [Features.PrimaryPower]: 9 },
  /*15*/{ [Features.Ancillary]: 3, [Features.SecondaryPower]: 9 },
  /*16*/{ [Features.PrimaryPower]: 10 },
  /*17*/{ [Features.AlphaPower]: null, [Features.SecondaryPower]: 10 },
  /*18*/{ [Features.JudgementPower]: null },
  /*19*/{ [Features.DestinyPower]: null },
  /*20*/{ [Features.OmegaPower]: null, [Features.Ancillary]: 4 },
];
