<template>
  <header id="main-navigation">
    <div id="navigation" data-spy="affix" data-offset-top="20">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="top-right text-right">
              <li><a href="#." class="facebook"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#." class="twitter"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#." class="instagram"><i class="icon-instagram"></i></a></li>
            </ul>

            <nav class="navbar navbar-default">
              <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#fixed-collapse-navbar" aria-expanded="true">
                  <span class="icon-bar top-bar"></span> <span class="icon-bar middle-bar"></span> <span
                    class="icon-bar bottom-bar"></span> 
                </button>
                <a class="navbar-brand logo" href="#."><img src="/images/logo-white.png" alt="logo"
                    class="img-responsive"></a>
              </div>



              <div id="fixed-collapse-navbar" class="navbar-collapse collapse navbar-right">
                <ul class="nav navbar-nav">
                  <li class="hidden">
                    <a class="page-scroll" href="#page-top"></a>
                  </li>
                  <li class="active">
                    <a href="#main-slider" class="page-scroll">Home</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="#about">About</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="#thinkers">Team</a>
                  </li>
                  <li>
                    <a href="#project" class="page-scroll">Work</a>
                  </li>
                  <li>
                    <a href="#pricing" class="page-scroll">Prices</a>
                  </li>

                  <li>
                    <a href="#publication" class="page-scroll">Blog</a>
                  </li>

                  <li>
                    <a href="#contact" class="page-scroll">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
