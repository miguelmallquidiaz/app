import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { ChatService } from '../servicios/chat.service';

@Component({
  selector: 'app-componente-inicio',
  imports: [FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './componente-inicio.html',
  styleUrl: './componente-inicio.css'
})

export class ComponenteInicio {
  mensaje: string = '';
  mensajes: { tipo: 'user' | 'bot', texto: string }[] = [
    { tipo: 'bot', texto: 'Hola 👋, ¿En qué puedo ayudarte hoy?' }
  ];

  @ViewChild('chatBox', { static: true }) chatBox!: ElementRef;

  constructor(private chatService: ChatService) {}

  detectarEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.enviarMensaje();
  }

  enviarMensaje(): void {
    const texto = this.mensaje.trim();
    if (!texto) return;

    this.mensajes.push({ tipo: 'user', texto });
    this.mensaje = '';

    // Mostrar mensaje temporal
    this.mensajes.push({ tipo: 'bot', texto: 'Estoy pensando 🤔...' });
    const index = this.mensajes.length - 1;

    this.chatService.enviarPregunta(texto).subscribe({
      next: (respuesta) => {
        this.mensajes[index].texto = respuesta.respuesta;
        this.scrollToBottom();
      },
      error: () => {
        this.mensajes[index].texto = 'Ocurrió un error 😢 Intenta más tarde.';
        this.scrollToBottom();
      }
    });

    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    });
  }
}