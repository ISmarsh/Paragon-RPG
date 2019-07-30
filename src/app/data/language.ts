import { Data } from "../core/types";
import { CategoryIndex, Index } from '../core/classes';

export type Language = Data & {
  speakers: string[];
}

export const Languages = new CategoryIndex<Language>({
  "Alien": [
    {
      "name": "Kheld",
      "speakers": [
        "Kheldians"
      ]
    },
    {
      "name": "Nictus",
      "speakers": [
        "Nictus"
      ]
    },
    {
      "name": "Rikti",
      "speakers": [
        "Rikti"
      ]
    },
    {
      "name": "Shivan",
      "speakers": [
        "Shivans"
      ]
    }
  ],
  "Foreign": [
    {
      "name": "Arabic",
      "speakers": [
        "Afghanistan",
        "Algeria",
        "Egypt",
        "Iran",
        "Iraq",
        "Israel",
        "Libya",
        "Pakistan",
        "Saudi Arabia",
        "Syria"
      ]
    },
    {
      "name": "Bengali",
      "speakers": [
        "Bangladesh",
        "India",
        "Indonesia",
        "Thailand"
      ]
    },
    {
      "name": "English",
      "speakers": [
        "Australia",
        "Canada",
        "New Zealand",
        "United Kingdom",
        "United States"
      ]
    },
    {
      "name": "French",
      "speakers": [
        "Belgium",
        "Canada",
        "France",
        "Luxembourg",
        "Poland",
        "Switzerland"
      ]
    },
    {
      "name": "German",
      "speakers": [
        "Austria",
        "Germany",
        "Luxembourg",
        "Poland",
        "Switzerland"
      ]
    },
    {
      "name": "Hindi",
      "speakers": [
        "India",
        "Nepal",
        "Thailand"
      ]
    },
    {
      "name": "Irish",
      "speakers": [
        "Ireland",
        "Scotland",
        "United Kingdom"
      ]
    },
    {
      "name": "Italian",
      "speakers": [
        "Italy",
        "Sicily",
        "Switzerland",
        "Vatican City"
      ]
    },
    {
      "name": "Japanese",
      "speakers": [
        "China",
        "Japan",
        "Philippines"
      ]
    },
    {
      "name": "Korean",
      "speakers": [
        "Japan",
        "North Korea",
        "South Korea"
      ]
    },
    {
      "name": "Mandarin",
      "speakers": [
        "China",
        "Japan",
        "Mongolia",
        "Singapore",
        "Taiwan"
      ]
    },
    {
      "name": "Portuguese",
      "speakers": [
        "Brazil",
        "Colombia",
        "Portugal"
      ]
    },
    {
      "name": "Russian",
      "speakers": [
        "Belarus",
        "Kazakhstan",
        "Russia",
        "Ukraine"
      ]
    },
    {
      "name": "Spanish",
      "speakers": [
        "Argentina",
        "Bolivia",
        "Central America",
        "Chile",
        "Cuba",
        "Mexico",
        "Peru",
        "Spain",
        "Venezuela"
      ]
    },
    {
      "name": "Swedish",
      "speakers": [
        "Denmark",
        "Finland",
        "Luxembourg",
        "Norway",
        "Sweden"
      ]
    },
    {
      "name": "Turkish",
      "speakers": [
        "Albania",
        "Greece",
        "Macedonia",
        "Netherlands",
        "Romania",
        "Syria",
        "Turkey"
      ]
    }
  ],
  "Mystic": [
    {
      "name": "Abyssal",
      "speakers": [
        "Demons"
      ]
    },
    {
      "name": "Cimerora",
      "speakers": [
        "Ancient Cimerorans"
      ]
    },
    {
      "name": "Firbolg",
      "speakers": [
        "Fir Bolg"
      ]
    },
    {
      "name": "Igneous",
      "speakers": [
        "Minions of Igneous"
      ]
    },
    {
      "name": "Oranbegan",
      "speakers": [
        "Circle of Thorns",
        "Circle of Thorns Demons"
      ]
    },
    {
      "name": "Rularuu",
      "speakers": [
        "Soldiers of Rularuu"
      ]
    },
    {
      "name": "Tuatha",
      "speakers": [
        "Tuatha De Dannan"
      ]
    }
  ]
});
