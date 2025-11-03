# UML Sequence Diagrams - React Company Profile PT Jaya Beton Indonesia

## 1. Sequence Diagram: Inisialisasi Aplikasi

```plantuml
@startuml App_Initialization_Sequence

actor User
participant "Browser" as Browser
participant "App" as App
participant "JsonData" as Data
participant "Navigation" as Nav
participant "Header" as Header
participant "Gallery" as Gallery
participant "Features" as Features
participant "About" as About
participant "Services" as Services
participant "Contact" as Contact
participant "Footer" as Footer
participant "SmoothScroll" as Scroll

User -> Browser: Akses Website
activate Browser

Browser -> App: Load Application
activate App

App -> Scroll: Initialize SmoothScroll
activate Scroll
Scroll --> App: SmoothScroll Instance
deactivate Scroll

App -> App: useState({})
App -> App: useEffect()

App -> Data: Import data.json
activate Data
Data --> App: Return JsonData
deactivate Data

App -> App: setLandingPageData(JsonData)

App -> Nav: Render Navigation
activate Nav
Nav --> App: Navigation Component
deactivate Nav

App -> Header: Render Header(data)
activate Header
Header --> App: Header Component
deactivate Header

App -> Gallery: Render Gallery(data)
activate Gallery
Gallery --> App: Gallery Component
deactivate Gallery

App -> Features: Render Features(data)
activate Features
Features --> App: Features Component
deactivate Features

App -> About: Render About(data)
activate About
About --> App: About Component
deactivate About

App -> Services: Render Services(data)
activate Services
Services --> App: Services Component
deactivate Services

App -> Contact: Render Contact(data)
activate Contact
Contact --> App: Contact Component
deactivate Contact

App -> Footer: Render Footer(data)
activate Footer
Footer --> App: Footer Component
deactivate Footer

App --> Browser: Complete Page Render
Browser --> User: Display Website
deactivate App
deactivate Browser

@enduml
```

## 2. Sequence Diagram: User Membuka Modal Produk

```plantuml
@startuml Open_Product_Modal_Sequence

actor User
participant "Browser" as Browser
participant "Features" as Features
participant "FeatureModal" as Modal

User -> Browser: Click Product Category
activate Browser

Browser -> Features: onClick Event
activate Features

Features -> Features: handleFeatureClick(feature)
Features -> Features: setSelectedFeature(feature)
Features -> Features: setModalOpen(true)

Features -> Modal: Render FeatureModal
activate Modal

Modal -> Modal: Initialize currentIndex = 0
Modal -> Modal: Get images from props
Modal -> Modal: Get folder from props

Modal -> Browser: Display Modal with Images
Browser --> User: Show Product Modal

User -> Browser: Click Next Button
Browser -> Modal: onClick nextSlide()
Modal -> Modal: setCurrentIndex(currentIndex + 1)
Modal -> Browser: Update Image Display
Browser --> User: Show Next Image

User -> Browser: Click Previous Button
Browser -> Modal: onClick prevSlide()
Modal -> Modal: setCurrentIndex(currentIndex - 1)
Modal -> Browser: Update Image Display
Browser --> User: Show Previous Image

User -> Browser: Click Dot Indicator
Browser -> Modal: onClick goToSlide(index)
Modal -> Modal: setCurrentIndex(index)
Modal -> Browser: Update Image Display
Browser --> User: Show Selected Image

User -> Browser: Click Close/Outside Modal
Browser -> Modal: onClick onClose()
Modal -> Features: Call onClose callback
Features -> Features: handleCloseModal()
Features -> Features: setModalOpen(false)
Features -> Features: setSelectedFeature(null)

deactivate Modal
Features -> Browser: Remove Modal
Browser --> User: Modal Closed

deactivate Features
deactivate Browser

@enduml
```

## 3. Sequence Diagram: User Mengirim Contact Form

```plantuml
@startuml Send_Contact_Form_Sequence

actor User
participant "Browser" as Browser
participant "Contact" as Contact
participant "EmailJS" as EmailJS
participant "EmailServer" as Server

User -> Browser: Fill Contact Form
activate Browser

Browser -> Contact: Input name
activate Contact
Contact -> Contact: handleChange(event)
Contact -> Contact: setState({name: value})

Browser -> Contact: Input email
Contact -> Contact: handleChange(event)
Contact -> Contact: setState({email: value})

Browser -> Contact: Input message
Contact -> Contact: handleChange(event)
Contact -> Contact: setState({message: value})

User -> Browser: Click "Send Message"
Browser -> Contact: onSubmit Event
Contact -> Contact: handleSubmit(event)
Contact -> Contact: event.preventDefault()

Contact -> EmailJS: sendForm(serviceId, templateId, form, userId)
activate EmailJS

EmailJS -> Server: Send Email Request
activate Server

alt Email Sent Successfully
    Server --> EmailJS: Success Response
    EmailJS --> Contact: result.text (Success)

    Contact -> Browser: alert("Pesan berhasil dikirim!")
    Browser --> User: Show Success Message

    Contact -> Contact: clearState()
    Contact -> Contact: setState(initialState)
    Contact -> Browser: Clear Form Fields
    Browser --> User: Form Reset

else Email Failed
    Server --> EmailJS: Error Response
    EmailJS --> Contact: error.text (Failed)

    Contact -> Browser: alert("Gagal mengirim pesan")
    Browser --> User: Show Error Message
end

deactivate Server
deactivate EmailJS
deactivate Contact
deactivate Browser

@enduml
```

## 4. Sequence Diagram: User Navigasi Smooth Scroll

```plantuml
@startuml Smooth_Scroll_Navigation_Sequence

actor User
participant "Browser" as Browser
participant "Navigation" as Nav
participant "SmoothScroll" as Scroll
participant "TargetSection" as Target

User -> Browser: Click Navigation Link
activate Browser

Browser -> Nav: onClick Event
activate Nav

Nav -> Scroll: Trigger Smooth Scroll
activate Scroll

Scroll -> Scroll: Get target href (#section)
Scroll -> Scroll: Calculate scroll distance
Scroll -> Scroll: Animate scroll (speed: 1000ms)

loop Scroll Animation
    Scroll -> Browser: Update scroll position
    Browser --> User: Smooth scroll animation
end

Scroll -> Target: Scroll to target section
activate Target

Target --> Browser: Section in viewport
Browser --> User: Display target section

deactivate Target
deactivate Scroll
deactivate Nav
deactivate Browser

@enduml
```

## 5. Sequence Diagram: User Melihat Gallery

```plantuml
@startuml View_Gallery_Sequence

actor User
participant "Browser" as Browser
participant "Gallery" as Gallery
participant "Image" as Image
participant "Lightbox" as Lightbox

User -> Browser: Scroll to Gallery Section
activate Browser

Browser -> Gallery: Render Gallery Component
activate Gallery

Gallery -> Gallery: Get data from props
Gallery -> Gallery: Map through gallery data

loop For each gallery item
    Gallery -> Image: Render Image Component
    activate Image

    Image -> Image: Set title, largeImage, smallImage
    Image -> Browser: Display thumbnail
    Browser --> User: Show gallery thumbnail

    deactivate Image
end

User -> Browser: Click on Gallery Image
Browser -> Image: onClick Event
activate Image

Image -> Lightbox: Open Lightbox
activate Lightbox

Lightbox -> Lightbox: Load large image
Lightbox -> Browser: Display full-size image
Browser --> User: Show enlarged image

User -> Browser: Click Close/Outside
Browser -> Lightbox: Close Event
Lightbox -> Browser: Close Lightbox
Browser --> User: Return to gallery view

deactivate Lightbox
deactivate Image
deactivate Gallery
deactivate Browser

@enduml
```

## Penjelasan Sequence Diagrams

### 1. **Inisialisasi Aplikasi**

Menunjukkan proses loading aplikasi dari awal hingga semua komponen ter-render:

- Browser memuat aplikasi
- App component melakukan initialization
- Data dimuat dari JSON
- Semua child components di-render secara berurutan
- SmoothScroll diinisialisasi untuk navigasi

### 2. **Membuka Modal Produk**

Menunjukkan interaksi user dengan fitur modal produk:

- User mengklik kategori produk
- Modal terbuka dengan carousel images
- User dapat navigasi antar gambar (next, prev, dots)
- User dapat menutup modal

### 3. **Mengirim Contact Form**

Menunjukkan proses pengiriman form kontak:

- User mengisi form (name, email, message)
- State di-update setiap ada perubahan input
- Form di-submit ke EmailJS
- EmailJS mengirim ke email server
- Menampilkan success/error message
- Form di-reset jika berhasil

### 4. **Navigasi Smooth Scroll**

Menunjukkan proses smooth scrolling saat navigasi:

- User mengklik link navigasi
- SmoothScroll library menganimasikan scroll
- Browser scroll ke section target dengan smooth animation

### 5. **Melihat Gallery**

Menunjukkan interaksi user dengan gallery:

- Gallery component me-render semua thumbnail
- User mengklik thumbnail
- Lightbox membuka gambar full-size
- User dapat menutup lightbox

## Karakteristik Interaksi

1. **Event-Driven**: Semua interaksi dimulai dari user action
2. **State Management**: Perubahan state memicu re-render component
3. **Asynchronous Operations**: EmailJS menggunakan Promise untuk operasi async
4. **Component Communication**: Parent-child communication melalui props dan callbacks
5. **External Service Integration**: Integrasi dengan EmailJS dan SmoothScroll library
