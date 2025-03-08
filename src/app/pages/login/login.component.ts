import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RetornoLogin } from 'src/app/interfaces/RetornoLogin';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private servico:UsuarioService,
    private formBuilder:FormBuilder,
    private cookieService : CookieService,
    private messageService: MessageService,
    private router : Router){}
  cpfUsuario = '';
  cnpjCondominio='';
  senhaUsuario='';
  loginCard = true;

  loginForm = this.formBuilder.group({
    cpf:['',Validators.required],
    senha:['',Validators.required],
  })

  formCadastro = this.formBuilder.group({
    cpf:['',Validators.required],
    nome:['',Validators.required],
    senha:['',Validators.required],
  })

  private readonly destroy$: Subject<void> = new Subject();
  dadosLogin!: RetornoLogin;
  searchIcon = faMagnifyingGlass;
  ngOnInit(): void {
   // this.logar("00900164751","00745614000100","123456");
    console.log('Iniciou...')
  }

  logar():void{
    this.servico.login(
      this.loginForm.controls.cpf.value as string,
      this.loginForm.controls.senha.value as string)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next:(response)=>{
        const info = {
          "name": response?.name,
          "token": response?.token,
        }
        this.cookieService.set('USER_INFO', JSON.stringify(info));
        this.loginForm.reset();
        this.messageService.add({
          severity:'success',
          summary:'Sucesso',
          detail:`Bem vindo ${response.name}`,
          life:2000
          })
         this.router.navigate(['/dashboard']);
      },
      error:(error)=> {
        this.messageService.add({
          severity:'error',
          summary:'Erro',
          detail:'Ocorreu um erro ao logar.',
          life:2000
          })
        console.log(error)
      },
    })
  }


  criarConta():void{
    //console.log(this.formCadastro.value)
    this.servico.cadastrarConta(
      this.formCadastro.controls.cpf.value as string,
      this.formCadastro.controls.nome.value as string,
      this.formCadastro.controls.senha.value as string)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
      next:(response)=>{
        this.formCadastro.reset();
        this.messageService.add({
          severity:'success',
          summary:'Sucesso',
          detail:'Conta Master Criada com sucesso ',
          life:2000
          })
        this.loginCard=true;
      },
      error:(error)=> {
        this.messageService.add({
          severity:'error',
          summary:'Erro',
          detail:'Ocorreu um erro ao criar a conta.',
          life:2000
          })
        console.log('DEU ERRO', error)
      },
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
