import { Component } from '@angular/core';
import { DadosPokemonPage } from '../dados-pokemon/dados-pokemon.page';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';
import { IPokemon } from '../interfaces/iPokemon';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    /* Bulbasaur */
    {numero: '001', nome: 'Bulbasaur', tipos: ['Grass', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'},

    /* Charmander */
    {numero: '004', nome: 'Charmander', tipos: ['Fire'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'},

    /* Squirtle */ 
    {numero: '007', nome: 'Squirtle', tipos: ['Water'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'},

    /* Pikachu */ 
    {numero: '025', nome: 'Pikachu', tipos: ['Eletric'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},

    /* Zapdos */ 
    {numero: '145', nome: 'Zapdos', tipos: ['Eletric','Flying'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png'},

    /* Entei */
    {numero: '244', nome: 'Entei', tipos: ['Fire'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png'},

    /* Kyogre */ 
    {numero: '382', nome: 'Kyogre', tipos: ['Water'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png'},

    /* Lugia */
    {numero: '249', nome: 'Lugia', tipos: ['Psychic','Flying'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png'},

    /* Suicune */ 
    {numero: '245', nome: 'Suicune', tipos: ['Water'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png'},

    /* Raikou */ 
    {numero: '243', nome: 'Raikou', tipos: ['Eletric'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png'}
  ];
  public listaFiltrada = [];

  constructor(
  public dadosService: DadosService,
  public router: Router
  
  ) 
  {
    this.resetarLista();
  }

  abrirDadosPokemon(pokemon: IPokemon){
    // Salva os dados do Pokemon no BD Virtual.
    this.dadosService.setDados('dadosPokemon', pokemon);

    // Abre a página para exibir os dados.
    this.router.navigateByUrl('/dados-pokemon');
  }

  private resetarLista(){
    this.listaFiltrada = this.listaPokemons;
  }

  public buscarPokemon(evento: any){
    let busca = evento.target.value;
    
    this.resetarLista(); 

    if(busca && busca.trim() != ''){
      this.listaFiltrada = this.listaFiltrada.filter( dados =>{
        if(dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1 || (dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1)){
          return true;
        }
        return false;
    });
  }
 }
}
