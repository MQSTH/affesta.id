    function updateCountdown() {
      const targetDate = new Date("2026-05-01T08:00:00+07:00").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");

      if (distance < 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
      }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    function scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      const navLinks = document.querySelectorAll(".navbar-menu li a");
      const hamburger = document.getElementById("hamburger");

      if (window.scrollY > 460) {
        navbar.classList.add("scrolled");
        hamburger.classList.add("scrolled");
        navLinks.forEach((link) => {
          link.classList.add("scrolled");
        });
      } else {
        navbar.classList.remove("scrolled");
        hamburger.classList.remove("scrolled");
        navLinks.forEach((link) => {
          link.classList.remove("scrolled");
        });
      }

      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      document.addEventListener("DOMContentLoaded", function () {
        document
          .querySelectorAll(".feature-card, .content-card, .info-card")
          .forEach((el) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "all 0.8s ease-out";
            observer.observe(el);
          });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("registrationForm");

      // Contact numbers untuk setiap jenis lomba
      const contactNumbers = {
        "Ratoe Jaroh": "6282118225264",
        "Hadroh Banjari": "6289876543210",
        "Scout Skill Competition (SMP)": "6281122334455",
        "Scout Skill Competition (SMA)": "6285566778899",
      };

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data dari form
        const asalSekolah = document.getElementById("asalSekolah").value.trim();
        const namaPeserta = document.getElementById("namaPeserta").value.trim();
        const jenisLomba = document.getElementById("jenisLomba").value;

        // Validasi form
        if (!asalSekolah || !namaPeserta || !jenisLomba) {
          alert("Mohon lengkapi semua data terlebih dahulu!");
          return;
        }

        // Dapatkan nomor contact person
        const contactNumber = contactNumbers[jenisLomba];

        // Buat pesan WhatsApp
        const message = `Halo kak 👋 Perkenalkan, aku ${namaPeserta}. Dari ${asalSekolah}. Aku tertarik nih kak sama lombanya, yaitu *${jenisLomba}*! 😄

Boleh minta info lebih lanjut soal pendaftarannya ya kak? Makasih banyak! 🙏`;

        // Buat URL WhatsApp
        const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodeURIComponent(
          message
        )}`;

        // Buka WhatsApp di tab baru
        window.open(whatsappUrl, "_blank");

        // Reset form setelah submit
        form.reset();

        // Tampilkan pesan konfirmasi
        alert(
          "Anda akan diarahkan ke WhatsApp. Silakan kirim pesan untuk menyelesaikan pendaftaran!"
        );
      });

      // Animasi saat scroll
      const registrationSection = document.querySelector(
        ".registration-section"
      );
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      if (registrationSection) {
        registrationSection.style.opacity = "0";
        registrationSection.style.transform = "translateY(30px)";
        registrationSection.style.transition = "all 0.8s ease-out";
        observer.observe(registrationSection);
      }
    });

    // Hamburger menu functionality
    document.addEventListener("DOMContentLoaded", function () {
      const hamburger = document.getElementById("hamburger");
      const navbarMenu = document.getElementById("navbarMenu");
      const navLinks = document.querySelectorAll(".navbar-menu li a");

      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navbarMenu.classList.toggle("active");
      });

      // Close menu when clicking on a link
      navLinks.forEach(link => {
        link.addEventListener("click", function () {
          hamburger.classList.remove("active");
          navbarMenu.classList.remove("active");
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
          hamburger.classList.remove("active");
          navbarMenu.classList.remove("active");
        }
      });
    });
