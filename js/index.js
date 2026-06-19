    $(document).ready(function(){
      /* ========= Loading ========= */
      setTimeout(function(){
        $('#loading').addClass('hide');
        $('body').addClass('loaded');
      }, 950);

      /* ========= Accent Color LocalStorage ========= */
      const savedColor = localStorage.getItem('osaka-accent-color');
      if(savedColor){
        document.documentElement.style.setProperty('--accent', savedColor);
      }
      $('.color-item').each(function(){
        $(this).css('backgroundColor', $(this).data('color'));
      });
      $('.color-item').click(function(){
        const color = $(this).data('color');
        document.documentElement.style.setProperty('--accent', color);
        localStorage.setItem('osaka-accent-color', color);
      });

      /* ========= Settings Box ========= */
      $('#btnSeating').click(function(){
        $('#change').toggleClass('open');
      });

      /* ========= Navbar Scroll + Back To Top ========= */
      function navState(){
        if($(window).scrollTop() > 60){
          $('#navbar').addClass('scrolled');
          $('#btnup').fadeIn(250);
        }else{
          $('#navbar').removeClass('scrolled');
          $('#btnup').fadeOut(250);
        }
      }
      navState();
      $(window).on('scroll', navState);

      $('#btnup').click(function(){
        $('html, body').animate({scrollTop:0}, 650);
      });

      /* ========= Smooth Scroll + Close Mobile Menu ========= */
      $('.nav-link, .btn-lux, .btn-ghost, .navbar-brand').click(function(e){
        const href = $(this).attr('href');
        if(href && href.startsWith('#') && $(href).length){
          e.preventDefault();
          $('html, body').animate({scrollTop:$(href).offset().top - 70}, 850);
          $('.navbar-collapse').collapse('hide');
        }
      });

      /* ========= Active Link On Scroll ========= */
      const sections = $('header[id], section[id]');
      $(window).on('scroll', function(){
        const scrollPos = $(document).scrollTop() + 120;
        sections.each(function(){
          const top = $(this).offset().top;
          const bottom = top + $(this).outerHeight();
          const id = $(this).attr('id');
          if(scrollPos >= top && scrollPos <= bottom){
            $('.nav-link').removeClass('active-link');
            $('.nav-link[href="#'+id+'"]').addClass('active-link');
          }
        });
      });

      /* ========= Gallery ========= */
      $('.img-item').click(function(){
        const imgSrc = $(this).attr('src');
        $('.img-item').removeClass('active-thumb');
        $(this).addClass('active-thumb');
        $('#main-img').css('opacity', 0);
        setTimeout(function(){
          $('#main-img').attr('src', imgSrc).css('opacity', 1);
        }, 220);
      });

      /* ========= MixItUp Filter ========= */
      if(typeof mixitup !== 'undefined'){
        mixitup('.mm', {
          selectors:{target:'.mix'},
          animation:{duration:450, effects:'fade translateY(22px) stagger(45ms)'}
        });
      }
      $('.filter-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });

      /* ========= Reveal On Scroll ========= */
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const revealObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {threshold:.14});
      revealElements.forEach(function(el){revealObserver.observe(el);});

      /* ========= Counters ========= */
      const counters = document.querySelectorAll('.counter');
      let countersStarted = false;
      function startCounters(){
        if(countersStarted) return;
        const statsTop = $('.stats-panel').offset().top;
        if($(window).scrollTop() + $(window).height() > statsTop + 80){
          countersStarted = true;
          counters.forEach(function(counter){
            const target = +counter.getAttribute('data-target');
            const duration = 1300;
            const start = performance.now();
            function update(now){
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.floor(eased * target);
              counter.textContent = target >= 1000 ? value.toLocaleString() : value;
              if(progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
          });
        }
      }
      startCounters();
      $(window).on('scroll', startCounters);

      /* ========= Hero Parallax ========= */
      $(window).on('scroll', function(){
        const y = $(window).scrollTop();
        if(y < window.innerHeight){
          $('.hero-content').css('transform', 'translateY(' + (y * .12) + 'px)');
          $('.scroll-indicator').css('opacity', Math.max(0, 1 - y / 250));
        }
      });
    });