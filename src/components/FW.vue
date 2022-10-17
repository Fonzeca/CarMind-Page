<template>
    <b-container class="bv-example-row seccion celestito_fondo" fluid>
      <!-- Paso 1 Formulario Tipo-->
      <b-row v-if="historial == 'Tipo'" class="formaBase">
        <b-col cols="12">
          <h2 class="text-center title pregunta" @click="enviarForm()">
            Para entender mejor las necesidades de su negocio <br>¿con qué tipo de vehículos cuentas?
          </h2>
        </b-col>
        <b-col cols="12" md="1">
        </b-col>
        <b-col cols="12" md="10">
          <b-row class="form_img">
            
            <b-col cols="12" md="2" class="my-custom-input-label-box Camionetas">
              <input 
              @change="validarTipoMetodo()"  
              v-model="tipo"  
              value="Camionetas" 
              id="Camionetas" 
              type="checkbox" 
              name="Camionetas"/>
              <label for="Camionetas"><span class="text_label"> Camionetas</span></label>
              <div class="vv_g"></div>
            </b-col>

            <b-col cols="12" md="2" class="my-custom-input-label-box Automoviles">
              <input 
              @change="validarTipoMetodo()"  
              v-model="tipo"  
               id="Automoviles" 
               value="Automoviles" 
               type="checkbox" 
               name="Automoviles"/>
              <label for="Automoviles"><span class="text_label"> Automoviles</span></label>
              <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="2" class="my-custom-input-label-box Camiones">
              <input 
              @change="validarTipoMetodo()"  
              v-model="tipo"  
               id="Camiones" 
               value="Camiones" 
               type="checkbox" 
               name="Camiones"/>
              <label for="Camiones"><span class="text_label"> Camiones</span></label>
              <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="2" class="my-custom-input-label-box Autobuses">
              <input 
              @change="validarTipoMetodo()"  
              v-model="tipo"  
              id="Autobuses" 
              value="Autobuses" 
              type="checkbox" 
              name="Autobuses"/>
              <label for="Autobuses"><span class="text_label"> Autobuses</span></label>
              <div class="vv_g"></div>
            </b-col>
            
            <b-col cols="12" md="2" class="my-custom-input-label-box Semi">
              <input 
              @change="validarTipoMetodo()"  
               v-model="tipo"  
               id="Otros" 
               value="Otros" 
               type="checkbox" 
               name="Otros"/>
              <label for="Otros"><span class="text_label"> Otros</span></label>
              <div class="vv_g"></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="1">
        </b-col>
        <b-col class="historial" cols="12" md="12">
           <b-button 
          :disabled="!tipo_ok" @click="irHistorial('Flota')" size="lg" variant="primary">
            Continuar
          </b-button>
          
        </b-col>

      </b-row>
      
      <!-- Paso 2 Formulario Tamaño Flota-->
      <b-row v-else-if="historial == 'Flota'" class="formaBase">
        <b-col class="room" cols="12">
          <h2 class="text-center title pregunta">
              ¡Definitivamente podemos ayudar con eso! <br>
              ¿Con cuantos vehiculos contas?
          </h2>
        </b-col>
        <b-col cols="12" md="4">
        </b-col>
        <b-col cols="12" md="4">
          <b-row class="form_img">
            <b-col cols="12" md="12" class="my-custom-input-label-box linea">
              <input 
              v-model="flota"
              @change="pasarFlota()"  
              value="1-5" 
              id="unodos" 
              type="checkbox" 
              name="unodos"/>
              <label for="unodos">
                <span class="text_label">
                  1 - 5
                </span>
                </label>
              <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="12" class="my-custom-input-label-box linea">
              <input 
              v-model="flota"
              @change="pasarFlota()"  
              value="6-20"  
              id="3-19" 
              type="checkbox" 
              name="3-19"/>
              <label for="3-19">
                <span class="text_label">
                  6 - 20
                </span>
                </label>
              <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="12" class="my-custom-input-label-box linea">
              <input 
               v-model="flota"
              @change="pasarFlota()"  
              value="21-50" 
              id="20-50" 
              type="checkbox" 
              name="20-50"/>
              <label for="20-50">
                <span class="text_label">
                  21 - 50
                </span>
                </label>
              <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="12" class="my-custom-input-label-box linea">
              <input 
               v-model="flota"
              @change="pasarFlota()"  
              value="Mas de 50" 
              id="50" 
              type="checkbox" 
              name="50"/>
              <label for="50">
                <span class="text_label">
                  50+
                </span>
                </label>
              <div class="vv_g"></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="1">
        </b-col>
        
        <b-col class="historial" cols="12" md="12">
          <b-button 
          :disabled="!flota_ok" @click="irHistorial('Monitoreo')" size="lg" variant="primary">
            Continuar
          </b-button>
          <br>
          <b-button 
          :state="!flota_ok" @click="irHistorial('Tipo')" size="sm" variant="outline-secondary">
            Atras
          </b-button>
        </b-col>

      </b-row>
      
      <!-- Paso 3 Formulario Monitoreo-->
      <b-row v-else-if="historial == 'Monitoreo'" class="formaBase">
        <b-col cols="12" md="12">
          <h2 class="text-center title pregunta">
             ¿Que caracteristicas te interesan mas?
          </h2>
        </b-col>
        <b-col cols="12" md="2"></b-col>
      
        <b-col cols="12" md="8">
          <b-row class="form_img">
            <b-col cols="12" md="3" class="my-custom-input-label-box GPS">
              <input 
              v-model="servicios"
              @change="validarServicioMetodo()"  
              value="GPS"
              id="GPS" type="checkbox" name="GPS"/>
              <label for="GPS">
                <span class="text_label">GPS</span>
              </label>
                <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="3" class="my-custom-input-label-box Documentos">
              <input 
              v-model="servicios"
              @change="validarServicioMetodo()"  
              value="Documentos"
              id="Documentos" type="checkbox" name="Documentos"/>
              <label for="Documentos">
                <span class="text_label">Control de Documentos</span>
              </label>
                <div class="vv_g"></div>
            </b-col>
            <b-col cols="12" md="3" class="my-custom-input-label-box Checklist">
              <input 
              v-model="servicios"
              @change="validarServicioMetodo()"  
              value="Checklist"
              id="Checklist" type="checkbox" name="Checklist"/>
              <label for="Checklist">
                <span class="text_label">Checklist</span>
              </label>
                <div class="vv_g"></div>
            </b-col>
          </b-row>
        </b-col>
        
        <b-col cols="12" md="3"></b-col>
        
        <b-col class="historial" cols="12" md="12">
          <b-button 
          :disabled="!servicios_ok" @click="irHistorial('Email')" size="lg" variant="primary">
            Continuar
          </b-button>
          <br>
          <b-button 
          :state="!servicios_ok" @click="irHistorial('Flota')" size="sm" variant="outline-secondary">
            Atras
          </b-button>
        </b-col>

      </b-row>
            
      <!-- Paso 4 Formulario Email-->      
      <b-row v-else-if="historial == 'Email'" class="formaBase">
        <b-col class="room" cols="12" md="12">
          <h2 class="text-center title pregunta">
             ¿A qué dirección de correo electrónico <br>podemos enviarte la información?
          </h2>
        </b-col>
        <b-col cols="12" md="3"></b-col>
        
          <b-col cols="12" md="6">
            <b-row class="">
              <b-col cols="12" md="12" class="">
                <b-form-input 
                  id="email"
                  v-model="email" 
                  :state="validarEmail" 
                  
                  placeholder="Ingrese su Email">
                </b-form-input>
              </b-col>
             
            </b-row>
          </b-col>
          
          <b-col cols="12" md="3"></b-col>
          <b-col class="historial" cols="12" md="12">
            <b-button 
            :disabled="!validarEmail" @click="irHistorial('Empresa')" size="lg" variant="primary">
              Continuar
            </b-button>
            <br>
            <b-button 
            :state="!validarEmail" @click="irHistorial('Monitoreo')" size="sm" variant="outline-secondary">
              Atras
            </b-button>
          </b-col>
      </b-row>
            
      <!-- Paso 5 Formulario Empresa-->      
      <b-row v-else-if="historial == 'Empresa'" class="formaBase">
        <b-col class="room" cols="12" md="12">
          <h2 class="text-center title pregunta">
           ¿Cuál es el nombre de tu empresa?  
          </h2>
        </b-col>
        <b-col cols="12" md="3"></b-col>
        
          <b-col cols="12" md="6">
            <b-row class="">
              <b-col cols="12" md="12" class="">
                <b-form-input 
                  id="input-empresa"
                  v-model="empresa" 
                  :state="validarEmpresa"
                  placeholder="Nombre de su empresa">
                </b-form-input>
              </b-col>
             
            </b-row>
          </b-col>
          
          <b-col cols="12" md="3"></b-col>
          <b-col class="historial" cols="12" md="12">
            <b-button 
            :disabled="!validarEmpresa" @click="irHistorial('Cliente')" size="lg" variant="primary">
              Continuar
            </b-button>
            <br>
            <b-button 
            :state="!validarEmpresa" size="sm" @click="irHistorial('Email')" variant="outline-secondary">
              Atras
            </b-button>
          </b-col>
      </b-row>
            
      <!-- Paso 6 Formulario Nombre Cliente-->      
      <b-row v-else-if="historial == 'Cliente'" class="formaBase">
        <b-col class="room" cols="12" md="12">
          <h2 class="text-center title pregunta">
            ¡Ya casi terminamos! ¿Cuál es tu nombre?
          </h2>
        </b-col>
        <b-col cols="12" md="3"></b-col>
        
          <b-col cols="12" md="6">
            <b-row>
              <b-col cols="12" md="6" class="">
                <b-form-input 
                  v-model="nombre" 
                  :state="validarNombre"
                  placeholder="Ingrese su Nombre">
                </b-form-input>
              </b-col>
             
              <b-col cols="12" md="6" class="">
                <b-form-input 
                  v-model="apellido"
                  :state="validarApellido" 
                  placeholder="Ingrese su Apellido">
                </b-form-input>
              </b-col>
             
            </b-row>
          </b-col>
          
          <b-col cols="12" md="3"></b-col>
          <b-col class="historial" cols="12" md="12">
            <b-button 
            :disabled="!(validarNombre && validarApellido)" @click="irHistorial('Telefono')" size="lg" variant="primary">
              Continuar
            </b-button>
            <br>
            <b-button 
            :state="!(validarNombre && validarApellido)" @click="irHistorial('Email')" size="sm" variant="outline-secondary">
              Atras
            </b-button>
          </b-col>
      </b-row>
            
      <!-- Paso 7 Formulario Telefono -->      
      <b-row v-show="historial == 'Telefono'" class="formaBase">
        <b-col class="room" cols="12" md="12">
          <h2 class="text-center title pregunta">
             Y como último, ¿Qué número de teléfono podemos usar para contactarte?
          </h2>
        </b-col>
        <b-col cols="12" md="3"></b-col>
          <b-col cols="12" md="6">
            <b-row class="">
              <b-col cols="12" md="12" class="">
                <b-form-input 
                  v-model="telefono" 
                  :state="validarTelefono"
                  placeholder="Ingrese su telefono">
                </b-form-input>
              </b-col>
            </b-row>
          </b-col>
        <b-col cols="12" md="3"></b-col>
        <b-col class="historial" cols="12" md="12">
          <b-button 
          :disabled="!validarTelefono" size="lg" @click="enviarForm()" variant="primary">
            Continuar
          </b-button>
          <br>
          <b-button 
          :state="!servicios_ok" size="sm" @click="irHistorial('Cliente')" variant="outline-secondary">
            Atras
          </b-button>
        </b-col>
        
      </b-row>
            
      <!-- Paso 7 Formulario Adios -->      
      <b-row v-show="historial == 'Adios'" class="formaBase">
        <b-col cols="12" md="12">
          <h2 class="text-center title pregunta adiosTxt">
             Muchas Gracias en breve estaremos en contactos con usted para brindarle una atencion personalizada
          </h2>
        </b-col>
        <b-col class="historial" cols="12" md="12">
          <b-button class="adiosBtn"
          size="lg" to="/" variant="success">
            Volver
          </b-button>
          <br>
          
        </b-col>
        
      </b-row>


    </b-container>  
</template>

<style>
    
    .adiosTxt{
      padding: 23%;
      padding-top: 23%;
      padding-bottom: 23%;
      padding-top: 0;
      padding-bottom: 0px;
    }
    .adiosBtn{
      width: 50vw;
      top: -31vh;
      position: relative;
    }
    .formaBase{
        height: 90vh;
    }
    .historial {
      margin-top: 25px;
    }
    .historial button{
      border-radius: 0px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .vv_g{
      border: 1px solid;
      height: 20px;
      width: 20px;
      position: relative;
      top: -125px;
      left: 8vw;
    }
    .text_label{
      font-size: 1rem;
      font-weight: 300;
      font-family: 'Nunito';
      top: 55%;
      position: relative;
    }
    
    .linea input + label{
      height: 50px !important;
    }

    .linea .text_label{
      top: 28%;
      left: -20px;
    }
    .linea .vv_g{
      top: -35px;
      left: 17vw;
    }

    .celestito_fondo{
      background-color: aliceblue;
    }
    
    .pregunta{
      font-family: 'Archivo';
      margin-top: 8vh;
    }
    
    .form_img{
        margin: 0 auto;
        margin-top: 5vh;
        padding-top: 2vh;
      }

    .my-custom-input-label-box{
      /* height: 25vh;
      width: 25vh;
       */
      padding: 1vw;
      margin: 0 auto;
      margin-right: 1.9em;
      margin-top: -40px;
    }
    
    .my-custom-input-label-box input[type="checkbox"] {
      position: relative;
      right: -75px;
      top: 125px;
      display: none;
      background-repeat:no-repeat;
      background-position: center;
      
    }
    .my-custom-input-label-box input + label {
      display: inline-block;	
      width: 180px;
      height: 140px;
      cursor: pointer;
      background-repeat:no-repeat;
      background-position: 50% 35%;	
      background-size: 40%;
      background-color: white;
      border: 0.1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5%;
      box-shadow: 2px 2px rgba(0,0,0,0.4);
    }
    .my-custom-input-label-box input[type="checkbox"]:checked + label  {
      box-shadow: 2px 2px #0078FF;
      border: 2px solid #0078FF;
    }
    
    .my-custom-input-label-box input[type="checkbox"]:checked + label + .vv_g  {
      background: #0384FB;
      background-image: url('@/assets/ok.svg');
      background-size: 80% 80%;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .Automoviles input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/car-1.svg');
    }
    .Automoviles input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/car-2.svg');
      height: 140px;
      padding: 5px;
    }

    .Camiones input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/truck-1.svg');
    }
    .Camiones input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/truck-2.svg');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .Autobuses input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/bus-1.svg');
    }
    .Autobuses input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/bus-2.svg');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .Semi input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/var-1.svg');
    }
    .Semi input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/var-2.svg');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .Camionetas input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/pickup-1.svg');
    }
    .Camionetas input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/pickup-2.svg');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .otro input + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/other_default_new.png');
    }
    .otro input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/TIPO/other_active_new.png');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .GPS input + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/GPS_default.png');
    }
    .GPS input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/GPS_selected.png');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .Documentos input + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/ELD_default.png');
    }
    .Documentos input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/ELD_selected.png');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    .Checklist input + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/routing_default.png');
    }
    .Checklist input[type="checkbox"]:checked + label {
      background-image: url('@/assets/Formulario/F_SPA/SERVICIO/routing_selected.png');
      /* border: 4px solid blue; */
      /* box-shadow: 4px 4px rgba(0,0,0,0.4); */
      height: 140px;
      padding: 5px;
    }

    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
      
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
      .vv_g{
        left: 61vw !important;
      }
      .formaBase{
        height: 100% !important;
      }
    }
</style>

<script>
    
    export default {
      name: 'FW',
      computed: {
        nameState() {
          return this.nombre.length > 2 ? true : false
        },
        validarTipo() {
          console.log(this.isObjEmpty(this.tipo))
          console.log(this.tipo)
          return !this.isObjEmpty(this.tipo)
        },
        validarEmail() {
          if (
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)
          ){
            return true;
          } else {
            return false;
          }
        }
        ,        
        validarEmpresa(){
          return this.empresa.length > 3 ? true : false
        }
        ,        
        validarApellido(){
            return this.apellido.length > 1 ? true : false
        }
        ,        
        validarNombre(){
          return this.nombre.length > 1 ? true : false
        }
        ,        
        validarTelefono(){
          if (
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.telefono)
          ){
            return true;
          } else {
            return false;
          }
        }
        
      },
      methods: {
        formatter(value) {
          return value.toLowerCase()
        },
        isObjEmpty(obj) {
          console.log(obj)
          for (var prop in obj) {
            console.log(prop)
            if (obj.hasOwnProperty(prop)) return false;
          }
            return true;
        },
        validarTipoMetodo() {
          console.log(this.tipo);
          if(this.tipo.length > 0){
            this.tipo_ok = true;
          }
          else{
            this.tipo_ok = false;
          }
        },
        validarServicioMetodo() {
          console.log(this.servicios);
          if(this.servicios.length > 0){
            this.servicios_ok = true;
          }
          else{
            this.servicios_ok = false;
          }
        },
        pasarFlota() {
          console.log(this.flota.length);
          if(this.flota.length > 0){
            //Avanzar a la siguiente pantalla
            console.log("Avanzar a la siguiente pantalla")
            // console.log(this.flota)
            if(this.flota.length == 2){
              console.log('mas de uno this.flota')
              this.flota[0] = this.flota[1];
              this.flota.splice(1, 1);
              console.log(this.flota)
            }
            this.flota_ok = true;
            return true;
          }
          else{
            this.flota_ok = false;
            return false;
          }
        },
        irHistorial(val){
          console.log(this.historial)
          this.historial = val;
        },
        enviarForm(){
         let envioM = {
          email: this.email,
          text: this.text,
          empresa: this.empresa,
          nombre: this.nombre,
          apellido: this.apellido,
          telefono: this.telefono,
          tipo: this.tipo,
          servicios: this.servicios,
          flota: this.flota
         }
         console.log(envioM)
         //Direccion donde esta el archivo PHP 
         this.$http.post('Mailer/sendEmail.php', {
            datos: envioM
         }).then(function(response){ 
            alert('Mensaje enviado con exito!')
            window.location.replace("/");
         }, function(){
            alert('Error!')
         });
        }      
      },
      data: function() {
        return {
          email: '',
          text: '',
          empresa: '',
          nombre: "",
          apellido: "",
          telefono: "",
          tipo: [],
          tipo_ok: false,
          servicios: [],
          servicios_ok: false,
          flota_ok: false,
          flota: [],
          historial: 'Tipo'
        }
      }
    }
</script>