// انتظار تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
  
  // ===== تهيئة Swiper للهيرو =====
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ===== تأثير النافبار عند التمرير =====
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== قائمة الهاتف (toggle) =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      const expanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded);
    });

    // إغلاق القائمة عند النقر على أي رابط داخلها
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== وظيفة تبديل اللغة (محاكاة) =====
  const langToggle = document.getElementById('languageToggle');
  const mobileLangToggle = document.getElementById('mobileLanguageToggle');
  const langFlag = document.getElementById('languageFlag');
  const langText = document.getElementById('languageText');
  const mobileFlag = document.getElementById('mobileLanguageFlag');
  const mobileText = document.getElementById('mobileLanguageText');

  function switchLanguage(lang) {
    if (lang === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      if (langFlag) langFlag.textContent = '🇬🇧';
      if (langText) langText.textContent = 'EN';
      if (mobileFlag) mobileFlag.textContent = '🇬🇧';
      if (mobileText) mobileText.textContent = 'English';
    } else {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      if (langFlag) langFlag.textContent = '🇸🇦';
      if (langText) langText.textContent = 'AR';
      if (mobileFlag) mobileFlag.textContent = '🇸🇦';
      if (mobileText) mobileText.textContent = 'العربية';
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      let currentLang = document.documentElement.lang;
      switchLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }
  
  if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', function() {
      let currentLang = document.documentElement.lang;
      switchLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // ===== تفعيل الرابط النشط في القائمة =====
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});


// ===== قسم اتصل بنا - كود جافاسكريبت مُصحح بالكامل =====

// منع ظهور تنبيهات المتصفح الافتراضية
window.alert = function() {};

// تنفيذ الكود بعد تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
  
  // التحقق من صحة النموذج عند الإرسال
  (function() {
    'use strict';
    
    // الحصول على جميع النماذج التي تحتاج إلى التحقق
    var forms = document.querySelectorAll('.needs-validation');
    
    // التأكد من وجود نماذج
    if (forms.length > 0) {
      console.log('تم العثور على نماذج للتحقق');
    }
    
    // تطبيق التحقق على كل نموذج
    Array.prototype.slice.call(forms).forEach(function(form) {
      form.addEventListener('submit', function(event) {
        // التحقق من صحة النموذج
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          
          // عرض رسالة خطأ باستخدام SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'خطأ في الإدخال',
            text: 'يرجى ملء جميع الحقول بشكل صحيح.',
            background: '#fff4f4',
            iconColor: '#dc3545',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            customClass: {
              popup: 'animated-swal',
              title: 'swal-title',
              content: 'swal-text'
            },
            showClass: {
              popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
              popup: 'animate__animated animate__bounceOut'
            }
          });
        }
        
        // إضافة كلاس التحقق من الصحة
        form.classList.add('was-validated');
      }, false);
    });
  })();

  // تصفية حقل الاسم للسماح فقط بالأحرف العربية والإنجليزية والمسافات
  var nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^A-Za-z\u0600-\u06FF\s\-']/g, '');
    });
  }

  // دالة عرض رسالة "قريباً" للأقسام تحت الإنشاء
  window.showComingSoon = function(event) {
    if (event) event.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'أمور مثيرة قادمة! 😊',
      text: 'هذا القسم تحت الإنشاء. كن على اطلاع لتجربة مذهلة!',
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      iconColor: '#11A7A5',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'center',
      customClass: {
        popup: 'animated-swal',
        title: 'swal-title',
        content: 'swal-text'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  // معالجة نموذج الاتصال باستخدام AJAX
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // لا نستخدم e.preventDefault() هنا لأننا نريد التحقق أولاً
      
      // التحقق من صحة النموذج
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
      
      // منع الإرسال الافتراضي للتعامل معه يدوياً
      e.preventDefault();
      
      // تعطيل زر الإرسال وتغيير النص
      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
      
      // جمع بيانات النموذج
      const formData = new FormData(this);
      
      // إضافة حقل إضافي لـ Formspree
      formData.append('_subject', 'رسالة جديدة من موقع G Mayne');
      
      // إرسال البيانات إلى Formspree
      fetch('https://formspree.io/f/mzzanwoy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('استجابة Formspree:', data);
        
        // التحقق من نجاح الإرسال
        if (data.ok || data.success) {
          // عرض رسالة نجاح
          Swal.fire({
            icon: 'success',
            title: 'تم الإرسال بنجاح!',
            text: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.',
            background: '#f4f9ff',
            iconColor: '#28a745',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center',
            customClass: {
              popup: 'animated-swal',
              title: 'swal-title',
              content: 'swal-text'
            },
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          
          // إعادة تعيين النموذج
          document.getElementById('contactForm').reset();
          document.getElementById('contactForm').classList.remove('was-validated');
        } else {
          // عرض رسالة خطأ
          Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: data.error || 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
            background: '#fff4f4',
            iconColor: '#dc3545',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center',
            customClass: {
              popup: 'animated-swal',
              title: 'swal-title',
              content: 'swal-text'
            },
            showClass: {
              popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
              popup: 'animate__animated animate__bounceOut'
            }
          });
        }
      })
      .catch(error => {
        console.error('خطأ في الإرسال:', error);
        
        // عرض رسالة خطأ مفصلة
        Swal.fire({
          icon: 'error',
          title: 'خطأ في الاتصال',
          text: 'حدث خطأ أثناء إرسال الرسالة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.',
          background: '#fff4f4',
          iconColor: '#dc3545',
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: 'موافق',
          confirmButtonColor: '#10b981',
          position: 'center',
          customClass: {
            popup: 'animated-swal',
            title: 'swal-title',
            content: 'swal-text',
            confirmButton: 'swal-button'
          },
          showClass: {
            popup: 'animate__animated animate__bounceIn'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOut'
          }
        });
      })
      .finally(() => {
        // إعادة تفعيل زر الإرسال
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
    });
  }

  // زر العودة إلى الأعلى
  var backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  
  // بيانات المشاريع
  const projectsData = {
    'kindergarten': {
      title: 'نظام رقمي لإدارة رياض الأطفال',
      fullDescription: 'نظام متكامل تم تطويره لإدارة رياض الأطفال بشكل رقمي بالكامل. يساعد النظام في تسجيل الأطفال، متابعة تطورهم، التواصل مع أولياء الأمور، وإدارة الأنشطة اليومية.',
      details: 'تم تطوير النظام باستخدام Laravel لل backend و React لل frontend. يتضمن النظام تطبيق جوال لأولياء الأمور لمتابعة أطفالهم بشكل لحظي.',
      technologies: ['Laravel', 'React', 'MySQL', 'Firebase', 'REST API'],
      client: 'مجموعة رياض الأطفال المتميزة',
      duration: ' 20 يوم  ',
      features: [
        'تسجيل إلكتروني للأطفال',
        'متابعة يومية للحضور والغياب',
        'تقارير تطور الطفل',
        'تواصل مباشر مع أولياء الأمور',
        'جدول الأنشطة والفعاليات',
        'سجل طبي وتطعيمات',
        'معرض صور وفيديوهات',
        'فواتير إلكترونية'
      ]
    },
    
    'museum': {
      title: 'منصة رقمية للمتحف الوطني',
      fullDescription: 'منصة رقمية متطورة تهدف إلى عرض المقتنيات الأثرية بطريقة تفاعلية وجذابة. توفر المنصة  معلومات مفصلة عن القطع الأثرية، ونظام حجز للزيارات.',
      details: 'تم تطوير المنصة باستخدام Vue.js للواجهة الأمامية و Node.js لل backend.  ',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Three.js', 'Socket.io'],
      client: 'المتحف الوطني',
      duration: 'شهرين ',
      features: [
        ' عرض جميع المقتنيات الأثرية بواجهة سهلة الاستخدام',
        'قاعدة بيانات رقمية للمقتنيات',
        'نظام حجز تذاكر إلكتروني',
        'نظام مشاركة  في فعاليات',
        'نظام ادارة موظفين',
        'معرض صور عالي الدقة'
      ]
    },
    
    'clinic': {
      title: 'نظام ذكي لإدارة العيادات',
      fullDescription: 'نظام متكامل لإدارة العيادات الطبية يشمل إدارة المواعيد، الملفات الطبية الإلكترونية، الفواتير، والتقارير الإحصائية. يساعد النظام في تحسين كفاءة العمل وتقليل وقت الانتظار.',
      details: 'تم تطوير النظام باستخدام PHP (Laravel) لل backend و React لل frontend. قاعدة البيانات PostgreSQL مع تحسينات للأداء والخصوصية.',
      technologies: ['Laravel', 'React', 'PostgreSQL', 'REST API', 'Redis'],
      client: 'مجمع العيادات الحديثة',
      duration: 'اسبوعين ',
      features: [
        'نظام مواعيد ذكي',
        'ملفات مرضى إلكترونية',
        'وصفات طبية إلكترونية',
        'فواتير ومتابعة مدفوعات',
        'تذكيرات للمرضى (SMS/Email)',
        'تقارير وإحصائيات متقدمة',
        'لوحة تحكم للإدارة',
        'تكامل مع أنظمة المختبر'
      ]
    }
  };

  // عناصر المودال
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalOverlay = document.querySelector('.modal-overlay');

  // دالة عرض تفاصيل المشروع
  window.showProjectDetails = function(projectId) {
    console.log('عرض تفاصيل المشروع:', projectId);
    
    const project = projectsData[projectId];
    if (!project) {
      console.error('المشروع غير موجود:', projectId);
      return;
    }
    
    // عرض مؤشر التحميل
    modalContent.innerHTML = `
      <div class="modal-loader">
        <i class="fas fa-spinner fa-spin"></i>
        <p>جاري تحميل التفاصيل...</p>
      </div>
    `;
    
    // إظهار المودال
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // تأخير بسيط لعرض التحميل ثم عرض المحتوى
    setTimeout(() => {
      // بناء قائمة المميزات
      let featuresList = '';
      project.features.forEach(feature => {
        featuresList += `<li><i class="fas fa-check-circle"></i> ${feature}</li>`;
      });
      
      // بناء قائمة التقنيات
      let techList = '';
      project.technologies.forEach(tech => {
        techList += `<span class="tech-badge">${tech}</span>`;
      });
      
      // محتوى المودال
      modalContent.innerHTML = `
        <div class="modal-project-details">
          <h2>${project.title}</h2>
          <p class="project-full-desc">${project.fullDescription}</p>
          <p class="project-details">${project.details}</p>
          
          <div class="project-meta">
            <div class="meta-item">
              <i class="fas fa-building"></i>
              <span>العميل: ${project.client}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-clock"></i>
              <span>مدة التطوير: ${project.duration}</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-users"></i>
              <span>الفريق: ${project.team}</span>
            </div>
          </div>
          
          <div class="project-tech-stack">
            <h4>التقنيات المستخدمة</h4>
            <div class="tech-tags">
              ${techList}
            </div>
          </div>
          
          <div class="project-features">
            <h4>المميزات الرئيسية</h4>
            <ul>
              ${featuresList}
            </ul>
          </div>
          
          <div class="modal-contact">
            <p>للحصول على مزيد من التفاصيل حول هذا المشروع</p>
            <a href="#contact" class="btn-cta" id="modalContactBtn">
              <span>تواصل معي</span>
              <i class="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      `;
      
      // ربط زر التواصل في المودال
      const contactBtn = document.getElementById('modalContactBtn');
      if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
          e.preventDefault();
          closeModal();
          const contactSection = document.querySelector('.contact-section');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }, 300);
  };

  // دالة إغلاق المودال
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // ربط أزرار التفاصيل
  const detailButtons = document.querySelectorAll('.btn-showcase');
  detailButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const projectId = this.getAttribute('data-project-id');
      if (projectId) {
        showProjectDetails(projectId);
      }
    });
  });

  // ربط أزرار إغلاق المودال
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  // إغلاق المودال بالضغط على ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // منع إغلاق المودال عند النقر على المحتوى
  const modalContainer = document.querySelector('.modal-container');
  if (modalContainer) {
    modalContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// دالة عامة للإغلاق (كاحتياط)
window.closeModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// ===== تعطيل القائمة تماماً وإظهار الإشعار فقط =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    // إزالة أي كلاس active
    menuToggle.classList.remove('active');
    
    // منع أي مستمع آخر
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      // التأكد من إزالة كلاس active إذا تمت إضافته
      this.classList.remove('active');
      if (navLinks) {
        navLinks.classList.remove('active');
      }
      
      // إظهار الإشعار
      Swal.fire({
        icon: 'info',
        title: 'النسخة الإنجليزية',
        text: 'سيتم توفير النسخة الإنجليزية من الموقع قريباً',
        background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
        iconColor: '#10b981',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'center',
        customClass: {
          popup: 'animated-swal',
          title: 'swal-title',
          content: 'swal-text'
        },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }, { capture: true }); // استخدام capture لضمان التنفيذ أولاً
  }
});