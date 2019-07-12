import { Component } from '@angular/core';

import { Hero } from './hero';
import { Origins } from 'src/data/origin';
import { Alignments } from 'src/data/alignment';
import { Archetypes } from 'src/data/archetype';
import { TraversalPowers } from 'src/data/traversal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paragon-rpg';
  
  hero = new Hero();
  origins = Origins;
  alignments = Alignments;
  archetypes = Archetypes;
  traversalPowers = TraversalPowers;
}
