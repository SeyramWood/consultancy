<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, maximum-scale=1" />
    <title inertia>{{ config('app.name', 'Centre For Diplomancy & Global Engagement') }}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet"> 

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="template/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="template/css/style.css" rel="stylesheet">

    {{-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet" /> --}}
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @inertiaHead
  </Head>
  <body>

    @inertia

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="template/lib/easing/easing.min.js" defer></script>
    <script src="template/lib/waypoints/waypoints.min.js" defer></script>
    <script src="template/lib/counterup/counterup.min.js" defer></script>
    <script src="template/lib/owlcarousel/owl.carousel.min.js" defer></script>

    <!-- Contact Javascript File -->
    <script src="template/mail/jqBootstrapValidation.min.js" defer></script>
    <script src="template/mail/contact.js" defer></script>

    <!-- Template Javascript -->
    <script src="template/js/main.js" defer></script>

  </body>
</html>
