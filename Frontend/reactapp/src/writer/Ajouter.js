import React from 'react'
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import { useState } from 'react';


export default function Ajouter() {
  const [content, setContent] = useState(''); // État pour stocker le contenu
  const[title,setTitle] = useState(''); //État

  // Fonction pour gérer les changements de texte dans l'éditeur
  const handleChange = (value, delta, source, editor) => {
    setContent(editor.getHTML()); // Mettre à jour le contenu dans l'état
    console.log("Delta:", delta); // Afficher le Delta dans la console
    console.log("HTML:", editor.getHTML()); // Afficher le HTML complet on envoie ca en backend 
    console.log("Text:", editor.getText()); // Afficher le texte brut
    
  };
  const handeltitleChange=(value)=>{
    setTitle(value);
    console.log('title', value);
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Listes
      [{ 'indent': '-1' }, { 'indent': '+1' }], // Gestion de l'indentation
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const modulesTitle = {
    toolbar: false
  };

  const formatsTitle = [];
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', height: '100vh' }}  >
      <ReactQuill
      value={title}
      onChange={handeltitleChange}
      placeholder="Titre"
      modules={modulesTitle}
      formats={formatsTitle}
      style={{ fontSize: '24px', fontWeight: 'bold', width: '30%',marginBottom: '30px',marginTop: '30px' }} 
      ></ReactQuill>
      <h2 >Mon éditeur de texte</h2>
      <ReactQuill
      value={content}
      onChange={handleChange}
      placeholder="Écrivez ici..."
      theme="snow"
      modules={modules}
      formats={formats}
      style={{ width:'80vw'}}  
    />
    <div style={{ marginTop: '20px' }}>
      {/* <h3>Contenu HTML :</h3> */}
      {/* <div className="rendered-content" dangerouslySetInnerHTML={{ __html: renderedContent  }} /> */}
    </div>
  </div>
  );
}
