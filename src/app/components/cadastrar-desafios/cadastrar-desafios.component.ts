import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-desafios',
  templateUrl: './cadastrar-desafios.component.html',
  styleUrls: ['./cadastrar-desafios.component.scss'],
})
export class CadastrarDesafiosComponent implements OnInit {
  quizForm: FormGroup = this.fb.group({
    questions: this.fb.array([])
  });
  
  json = {
    quiz: [
      {
        question:
          '1. Qual era a importância da diversidade cultural para os primeiros humanos?',
        alternatives: [
          'a) Os primeiros humanos acreditavam que a diversidade cultural era essencial para o desenvolvimento da agricultura.',
          'b) A diversidade cultural era vista como uma ameaça pelos primeiros humanos, pois levava a conflitos e guerras.',
          'c) A diversidade cultural permitia que os primeiros humanos evitassem posições etnocêntricas e enriquecessem sua cultura.',
        ],
        selected: true,
      },
      {
        question:
          '2. Quais são as duas principais teorias sobre o surgimento da humanidade?',
        alternatives: [
          'a) Criacionismo e evolucionismo.',
          'b) Humanismo e racionalismo.',
          'c) Socialismo e capitalismo.',
        ],
        selected: true,
      },
      {
        question:
          '3. Por que é importante estudar as produções culturais dos primeiros povos da América?',
        alternatives: [
          'a) Porque essas produções culturais são consideradas as mais avançadas do mundo.',
          'b) Porque elas revelam informações importantes sobre a história e a cultura dos primeiros povos da América.',
          'c) Porque essas produções culturais são consideradas sagradas pelos povos atuais da América.',
        ],
        selected: true,
      },
      {
        question:
          '1. Qual é o principal objetivo da atividade de conversação presente no livro?',
        alternatives: [
          'a. Refletir sobre a importância da diversidade cultural',
          'b. Investigar o surgimento da humanidade',
          'c. Conhecer as principais hipóteses sobre a chegada dos seres humanos à América',
        ],
        selected: true,
      },
      {
        question:
          '2. Por que é importante estudar diferentes noções de cultura?',
        alternatives: [
          'a. Para evitar posições etnocêntricas',
          'b. Para conhecer as principais hipóteses sobre a chegada dos seres humanos à América',
          'c. Para investigar os dois grandes períodos da história humana: Paleolítico e Neolítico',
        ],
        selected: true,
      },
      {
        question:
          '3. Qual é um dos recursos utilizados pelos primeiros humanos e que ainda é utilizado no mundo atual?',
        alternatives: [
          'a. Agricultura',
          'b. Controle do fogo',
          'c. Produções culturais',
        ],
        selected: true,
      },
      {
        question:
          '1. De acordo com o livro, quais foram as duas inovações mais importantes realizadas pelos primeiros humanos?',
        alternatives: [
          'a) A descoberta da roda e o desenvolvimento da agricultura.',
          'b) O controle do fogo e o desenvolvimento da escrita.',
          'c) O controle do fogo e o desenvolvimento da agricultura.',
        ],
        selected: true,
      },
      {
        question:
          '2. Qual é o objetivo da atividade de "Conversando" (p. 8) presente no livro?',
        alternatives: [
          'a) Estabelecer relações entre o passado e o presente.',
          'b) Compreender a influência das culturas grega e romana no mundo ocidental.',
          'c) Investigar os dois grandes períodos da história humana: Paleolítico e Neolítico.',
        ],
        selected: true,
      },
      {
        question:
          '3. De acordo com o livro, qual é o objetivo da atividade "Conversando" (p. 52)?',
        alternatives: [
          'a) Estabelecer relações entre o passado e o presente.',
          'b) Investigar as hipóteses sobre a chegada dos seres humanos à América.',
          'c) Compreender a influência das culturas grega e romana no mundo ocidental.',
        ],
        selected: true,
      },
      {
        question:
          '1. Qual é o objetivo da atividade "Conversando" na página 8 do livro?',
        alternatives: [
          'a) Refletir sobre a importância da diversidade cultural.',
          'b) Investigar os períodos históricos Paleolítico e Neolítico.',
          'c) Conhecer as principais hipóteses sobre a chegada dos seres humanos à América.',
        ],
        selected: true,
      },
    ],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.quizForm = this.fb.group({
      questions: this.fb.array(this.json.quiz.map(q => 
        this.fb.group({
          question: [q.question, Validators.required],
          alternatives: [q.alternatives, Validators.required],
          selected: [q.selected]
        })
      ))
    });
    this.updateSelectedQuestions()
  }

  get questionsFormArray(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  getSelectedControl(index: number): FormControl {
    const control = this.questionsFormArray.at(index).get('selected');
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error('Controle selecionado não é um FormControl');
  }

  onCheckboxChange(index: number) {
    const control = this.getSelectedControl(index);
    if (control) {
      control.setValue(!control.value);
    }
  }

  updateSelectedQuestions() {
    const selectedQuestions = this.questionsFormArray.controls
      .filter(c => (this.getSelectedControl(this.questionsFormArray.controls.indexOf(c))).value)
      .map(c => c.value);
    
    console.log('Selected Questions:', selectedQuestions);
  }
}