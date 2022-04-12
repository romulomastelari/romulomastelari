import { HttpEvent, HttpEventType } from '@angular/common/http'
import { AnimaisService } from './../animais.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.scss'],
})
export class NovoAnimalComponent implements OnInit {
  public formularioAnimal!: FormGroup
  public file!: File
  public preview!: string
  public percentualConcluido = 0

  constructor(
    private animaisService: AnimaisService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formularioAnimal = this.formBuilder.group({
      description: ['', Validators.maxLength(300)],
      file: ['', Validators.required],
      allowComments: [true],
    })
  }

  upload() {
    const allowComments =
      this.formularioAnimal.get('allowComments')?.value ?? false
    const description = this.formularioAnimal.get('description')?.value ?? ''
    this.animaisService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animais'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1
            this.percentualConcluido = Math.round(100 * (event.loaded / total))
          }
        },
        (error) => {
          console.log(error)
        },
      )
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files
    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => (this.preview = event.target.result)
    reader.readAsDataURL(file) //Consegue subir e ver o preview da imagem
  }
}
