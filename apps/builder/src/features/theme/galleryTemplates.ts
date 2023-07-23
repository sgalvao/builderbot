import { BackgroundType, ThemeTemplate } from '@typebot.io/schemas'

export const galleryTemplates: Pick<
  ThemeTemplate,
  'id' | 'name' | 'theme' | 'settings' | 'isPayed'
>[] = [
  {
    id: 'typebot-light',
    name: 'HackLead Light',
    isPayed: false,
    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#303235',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#FFFFFF', backgroundColor: '#0042DA' },
        hostAvatar: {
          isEnabled: true,
        },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#FFFFFF', backgroundColor: '#FF8E21' },
      },
      general: {
        font: 'Open Sans',
        background: { type: BackgroundType.COLOR, content: '#ffffff' },
      },
    },
  },
  {
    id: 'typebot-dark',
    name: 'HackLead Dark',
    isPayed: false,

    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#ffffff',
          backgroundColor: '#1e293b',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#ffffff', backgroundColor: '#1a5fff' },
        hostAvatar: {
          isEnabled: true,
        },
        hostBubbles: { color: '#ffffff', backgroundColor: '#1e293b' },
        guestBubbles: { color: '#FFFFFF', backgroundColor: '#FF8E21' },
      },
      general: {
        font: 'Open Sans',
        background: { type: BackgroundType.COLOR, content: '#171923' },
      },
    },
  },
  {
    id: 'minimalist-black',
    name: 'Minimalista Escuro',
    isPayed: false,

    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#303235',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#FFFFFF', backgroundColor: '#303235' },
        hostAvatar: { isEnabled: false },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
      },
      general: {
        font: 'Inter',
        background: { type: BackgroundType.COLOR, content: '#ffffff' },
      },
    },
  },
  {
    id: 'minimalist-teal',
    name: 'Minimalista Claro',
    isPayed: false,

    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#303235',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#FFFFFF', backgroundColor: '#0d9488' },
        hostAvatar: { isEnabled: false },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
      },
      general: {
        font: 'Inter',
        background: { type: BackgroundType.COLOR, content: '#ffffff' },
      },
    },
  },

  {
    id: 'bright-rain',
    name: 'Chuva de brilho',
    isPayed: false,

    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#303235',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#fff', backgroundColor: '#D27A7D' },
        hostAvatar: { isEnabled: true },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#303235', backgroundColor: '#FDDDBF' },
      },
      general: {
        font: 'Montserrat',
        background: {
          type: BackgroundType.IMAGE,
          content:
            'https://s3.fr-par.scw.cloud/typebot/public/typebots/hlmywyje0sbz1lfogu86pyks/blocks/ssmyt084oosa17cggqd8kfg9',
        },
      },
    },
  },
  {
    id: 'ray-of-lights',
    name: 'Raios de luz',
    isPayed: false,

    settings: {
      metadata: {},
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: true,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#303235',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#9095A0',
        },
        buttons: { color: '#fff', backgroundColor: '#1A2249' },
        hostAvatar: { isEnabled: true },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#fff', backgroundColor: '#1A2249' },
      },
      general: {
        font: 'Raleway',
        background: {
          type: BackgroundType.IMAGE,
          content:
            'https://s3.fr-par.scw.cloud/typebot/public/typebots/hlmywyje0sbz1lfogu86pyks/blocks/uc2dyf63eeogaivqzm4z2hdb',
        },
      },
    },
  },
  {
    id: 'whatsapp-theme',
    name: 'WhatsApp  (Beta)',
    isPayed: true,

    settings: {
      metadata: {
        title: 'WhatsApp Web',
        favIconUrl:
          'http://s3.us-east-1.amazonaws.com/hacklead/public/typebots/g0yhjtf4oc18g0vvwle5pqlg/favIcon?v=1690092968414',
        customHeadCode:
          '\n\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">\n\n<style>\n  .hide {\n    display: none!important;\n  }\n  typebot-standard {\n    position: relative;\n    z-index: 9999;\n  }\n  #__next {\n    position: relative;\n    z-index: 9999;\n  }\n  \n  /* User Bar */\n  .user-bar {\n    width: 100%;\n    height: 55px;\n    background: #005e54;\n    color: #fff;\n    padding: 0;\n    font-size: 24px;\n    position: fixed;\n    z-index: 99999;\n    display: block;\n    top: 0;\n  }\n  \n  .user-bar:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n  \n  .user-bar div {\n    float: left;\n    transform: translateY(-50%);\n    position: relative;\n    top: 50%;\n    margin-left: 10px;\n  }\n  \n  .user-bar .actions {\n    float: right;\n    margin: 0 0 0 20px;\n  }\n  \n  .user-bar .actions.more {\n    margin: 0 12px 0 32px;\n  }\n  \n  .user-bar .actions.attachment {\n    margin: 0 0 0 30px;\n  }\n  \n  .user-bar .actions.attachment i {\n    display: block;\n    transform: rotate(-45deg);\n  }\n  \n  .user-bar .avatar {\n    margin: 0 0 0 5px;\n    width: 36px;\n    height: 36px;\n  }\n  \n  .user-bar .avatar img {\n    border-radius: 50%;\n    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n    display: block;\n    width: 100%;\n  }\n  \n  .user-bar .name {\n    font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    margin: 0 0 0 8px;\n    overflow: hidden;\n    white-space: nowrap;\n    width: 150px;\n  }\n  \n  .user-bar .status {\n    display: block;\n    font-size: 13px;\n    font-weight: 400;\n    letter-spacing: 0;\n  }\n</style>\n\n<script>\n  function criarBarra() {\n    var userBar = document.createElement("div");\n    userBar.className = "user-bar";\n  \n    var backButton = document.createElement("div");\n    backButton.className = "back";\n    backButton.innerHTML = \'<i class="zmdi zmdi-arrow-left"></i>\';\n  \n    var avatar = document.createElement("div");\n    avatar.className = "avatar";\n    // ADICIONE O URL DA SUA FOTO DE PERFIL AQUI\n    avatar.innerHTML = \'<img src="SUA FOTO AQUI" alt="FOTO">\';\n  \n    var name = document.createElement("div");\n    name.className = "name";\n    // ALTERE SEU NOME AQUI\n    name.innerHTML = \'<span>Usuario Whatsapp</span><span class="status">online</span>\';\n  \n    var moreActions = document.createElement("div");\n    moreActions.className = "actions more";\n    moreActions.innerHTML = \'<i class="zmdi zmdi-more-vert"></i>\';\n  \n    var attachmentAction = document.createElement("div");\n    attachmentAction.className = "actions attachment";\n    attachmentAction.innerHTML = \'<i class="zmdi zmdi-attachment-alt"></i>\';\n  \n    var phoneAction = document.createElement("div");\n    phoneAction.className = "actions";\n    phoneAction.innerHTML = \'<i class="zmdi zmdi-phone"></i>\';\n  \n    userBar.appendChild(backButton);\n    userBar.appendChild(avatar);\n    userBar.appendChild(name);\n    userBar.appendChild(moreActions);\n    userBar.appendChild(attachmentAction);\n    userBar.appendChild(phoneAction);\n  \n    var elementoPai = document.querySelector("#__next");\n    if (elementoPai) {\n      elementoPai.insertBefore(userBar, elementoPai.firstChild);\n    }\n  }\n  \n  criarBarra();\n</script>',
      },
      typingEmulation: {
        enabled: true,
        maxDelay: 1.5,
        speed: 300,
      },
      general: {
        isBrandingEnabled: false,
        isHideQueryParamsEnabled: false,
        isInputPrefillEnabled: false,
      },
    },
    theme: {
      chat: {
        inputs: {
          color: '#000000',
          backgroundColor: '#FFFFFF',
          placeholderColor: '#28292a',
        },
        buttons: { color: '#fff', backgroundColor: '#128C7E' },
        hostAvatar: { isEnabled: false },
        hostBubbles: { color: '#303235', backgroundColor: '#F7F8FF' },
        guestBubbles: { color: '#303235', backgroundColor: '#e1ffc7' },
      },
      customCss:
        '.typebot-chat-view > .flex:first-child {\n  padding-top: 30px;\n}\n\n.typebot-input {\n  position: fixed;\n  bottom: 0;\n  align-items: center;\n  z-index: 999;\n  right: 0;\n}\n\n.typebot-input .typebot-button {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.typebot-container {\n  background-size: initial!important;\n  background-repeat: repeat-x!important;\n}\n\n.typebot-host-bubble > .bubble-typing {\n  border-radius: 0 5px 5px 5px;\n}\n\n.typebot-host-bubble > .bubble-typing:after {\n  position: absolute;\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.typebot-guest-bubble {\n  position: relative;\n  border-radius: 5px 0 5px 5px;\n}\n\n.typebot-guest-bubble:after {\n  position: absolute;\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n  border-style: solid;\n}\n\niframe[src=""] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: relative;\n  width: 100%;\n  height: 100% !important;\n  z-index: 999999;\n  border: none;\n  padding: 0;\n  margin: 0;\n}',
      general: {
        font: 'Open Sans',
        background: {
          type: BackgroundType.IMAGE,
          content:
            'http://s3.us-east-1.amazonaws.com/hacklead/public/typebots/ntpleg5aqbzjh58sne41hkhc/background?v=1690057177352',
        },
      },
    },
  },
]
