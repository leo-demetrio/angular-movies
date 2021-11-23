import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.cadastro = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

}
