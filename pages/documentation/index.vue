<template>
  <main class="tw-text-grey">
    <section class="section less-high">
      <div>
        <h1 class="title">Camé<span class="tw-text-green">Scope</span></h1>
      </div>
    </section>
    <section class="tw-flex tw-flex-wrap tw-items-baseline">
      <div class="tw-w-full lg:tw-w-1/4 tw-flex tw-justify-center">
        <h1 class="tw-text-green">Présentation</h1>
      </div>
      <div class="tw-w-full tw-p-8 lg:tw-w-2/3">
        <p>
          Un casque permettant à chaque oeil de voir indépendamment de l'autre.
        </p>
        <p>Le CaméScope, c'est voir le monde d'un autre oeil en simulant la vision du <b>caméléon</b>.</p>
        <p>
          Grâce au CaméScope, je n'ai plus besoin de regarder à gauche et à droite quand je traverse la route!
        </p>
      </div>

      <div class="tw-w-full lg:tw-w-1/4 tw-flex tw-justify-center">
        <h1 class="tw-text-green">Journal de bord</h1>
      </div>
      <div class="tw-w-full tw-p-8 lg:tw-w-2/3">
        <h2>Idée pilote</h2>
        <p>
          Voici les schémas pilotes de ce projet :
        </p>
        <div class="tw-flex tw-flex-wrap">
          <div class="tw-w-full md:tw-w-1/2"><img src="affiche1.png" alt="Affiche 1" class="tw-p-4" /></div>
          <div class="tw-w-full md:tw-w-1/2"><img src="affiche2.png" alt="Affiche 2" class="tw-p-4" /></div>
        </div>
        <h2>Un premier prototype</h2>
        <p>
          Nous avons commencé un protoype en utilisant du carton et deux téléphones pour simuler cette vision, voici quelques images au moment de l'élaboration
          de ce prototype primaire :
        </p>
        <div class="tw-flex tw-flex-wrap">
          <div class="tw-w-full md:tw-w-1/2"><img src="proto1.jpg" alt="proto 1" class="tw-p-4" /></div>
          <div class="tw-w-full md:tw-w-1/2"><img src="proto2.jpg" alt="proto 2" class="tw-p-4" /></div>
        </div>
        <h2>Test en simulation</h2>
        <p>
          Pour tester cette idée, nous avons simulé la vision d'un caméléon à l'aide d'un programme Processing. On peut déplacer à l'aide du clavier deux "yeux"
          sur une image de façon asynchrone.
        </p>
        <p>
          Voici une vidéo montrant ce programme en action :
        </p>
        <video src="came_clavier.mp4" type="video/mp4s" controls class="tw-w-full tw-h-auto" />
        <p>
          <a class="tw-text-green hover:tw-text-grey" href="https://github.com/Mistergix/designS2/tree/master/Rendu/1cameleon_avec_clavier" target="_blank">
            Lien du dépôt Github avec documentation
          </a>
        </p>
        <h2>Test en simulation avec Arduino</h2>
        <p>
          Pour nous faire la main avec Arduino, nous avons testé le programme ci-dessus, les inputs ne venant plus du clavier mais de boutons pressoirs sur une
          carte Arduino.
        </p>
        <p>
          Voici une vidéo montrant ce programme en action :
        </p>
        <video src="came_arduino.mp4" type="video/mp4s" controls class="tw-w-full tw-h-auto" />
        <p>
          <a
            class="tw-text-green hover:tw-text-grey"
            href="https://github.com/Mistergix/designS2/tree/master/Rendu/2cameleon_avec_arduino_boutons_poussoirs"
            target="_blank"
          >
            Lien du dépôt Github avec documentation
          </a>
        </p>
        <h2>On approche de l'idée finale</h2>
        <p>
          Nous avons très vite abandonné l'idée des miroirs au profit de caméras, dont les images sont retransmises sur un téléphone portable.
        </p>
        <h2>Des caméras sur des servos</h2>
        <p>
          Les caméras seront montées sur des servos. Au début nous voulions mettre 2 servos l'un sur l'autre dans le but de permettre des rotations sur 2 axes,
          mais les servos qu'on avait à disposition ne sont pas assez solides, nous avons donc réduit le nombre de servos à un par caméra.
        </p>
        <p>
          Nous avons créé un programme permettant de tourner les servos seulement en touchant un fil avec le bout des doigts :
        </p>
        <video src="servo_toucher.mp4" type="video/mp4s" controls class="tw-w-full tw-h-auto" />
        <h2>Deux caméras</h2>
        <p>
          Il fallait aussi créer un programme permettant de capturer l'image de 2 caméras en même temps et des les diffuser sur un seul écran :
        </p>
        <video src="deux_cameras.mp4" type="video/mp4s" controls class="tw-w-full tw-h-auto" />
        <p>
          <a class="tw-text-green hover:tw-text-grey" href="https://github.com/Mistergix/designS2/tree/master/Rendu/4capture_cams" target="_blank">
            Lien du dépôt Github avec documentation
          </a>
        </p>
        <h2>La découpe du casque</h2>
        <p>
          Nous avons élaboré un patron de casque de réalité virtuelle sur Inkscape pour le découper au laser. Voici une image de ce patron :
        </p>
        <div class="tw-flex tw-flex-wrap">
          <div class="tw-w-full"><img src="patron_design.png" alt="Patron du casque" class="tw-p-4" /></div>
        </div>
        <p>
          Ainsi qu'une vidéo de la découpe :
        </p>
        <video src="decoupe.mp4" type="video/mp4s" controls class="tw-w-full tw-h-auto" />
        <h2>Une vue d'ensemble du montage</h2>
        <p>
          Voici diverses photos montrant le casque dans son intégralité et après peinture :
        </p>
        <div class="tw-flex tw-flex-wrap">
          <div class="tw-w-full md:tw-w-1/2"><img src="casque1.jpg" alt="Casque 1" class="tw-p-4" /></div>
          <div class="tw-w-full md:tw-w-1/2"><img src="casque2.jpg" alt="Casque 2" class="tw-p-4" /></div>
          <div class="tw-w-full md:tw-w-1/2"><img src="casque3.jpg" alt="Casque 3" class="tw-p-4" /></div>
        </div>
      </div>
    </section>
  </main>
</template>
