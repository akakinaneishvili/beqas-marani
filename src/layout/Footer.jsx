import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import location from "/location.svg";
import mail from "/mail.svg";
import phone from "/phone.svg";
import clock from "/clock.svg";

function Footer() {
  return (
    <>
      <div className="w-full bg-footer mt-auto border-t border-t-Gold">
        <div className="flex flex-col lg:flex-row py-10 lg:py-16 gap-12 lg:gap-24 xl:gap-56 max-w-[1800px] w-full mx-auto px-4 sm:px-6">
          <section className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-6">
              <NavLink to="/" className="flex h-6 items-center">
                <img src={logo} alt="Logo" className="h-15 object-contain" />
                <span className="font-DM text-[#F5F0E8] text-[20px] font-medium tracking-[0.04em]">
                  Beka&apos;s Marani
                </span>
              </NavLink>
            </div>
            <p className="font-BPGB text-textMuted w-full sm:w-95 mb-8 leading-[1.6]">
              აღმოაჩინეთ ტრადიციული მეღვინეობის, მდიდარი გასტრონომიისა და
              ავთენტური კახური სტუმარმასპინძლობის ხელოვნება ოჟიოში.
            </p>

            <nav className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/bekasmarani"
                className="group text-amber-200 hover:text-amber-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-5 object-contain"
                />
                <span>@bekasmarani</span>
              </a>

              <a
                href="https://www.facebook.com/bekas.marani/"
                className="text-amber-200 hover:text-amber-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-5 object-contain"
                />
                <span>Facebook</span>
              </a>
            </nav>
          </section>

          <div className="h-px lg:h-auto w-full lg:w-px bg-[#FFAD0A]/12 shrink-0" />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-10">
            <section className="flex flex-col gap-10">
              <div className="flex items-start gap-3">
                <img src={location} alt="" className="w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-Gold font-BPGB tracking-[0.25em] uppercase mb-2">
                    მისამართი
                  </p>
                  <a
                    href="https://google.com/maps/place/%E1%83%91%E1%83%94%E1%83%A5%E1%83%90%E1%83%A1+%E1%83%9B%E1%83%90%E1%83%A0%E1%83%9C%E1%83%98/@41.9692948,45.365144,19z/data=!4m14!1m7!3m6!1s0x404435ebd3811f1d:0xb2c6c14744c8fb07!2z4YOR4YOU4YOl4YOQ4YOhIOGDm-GDkOGDoOGDkOGDnOGDmA!8m2!3d41.969232!4d45.3650716!16s%2Fg%2F11p5fblvh5!3m5!1s0x404435ebd3811f1d:0xb2c6c14744c8fb07!8m2!3d41.969232!4d45.3650716!16s%2Fg%2F11p5fblvh5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-BPGB text-textMuted hover:text-Gold transition-all duration-300 leading-[1.8] font-light block"
                  >
                    სოფელი ოჟიო,
                    <br />
                    ახმეტის რაიონი, საქართველო
                    <br />
                    <span className="text-Gold/50 text-[12px]">
                      Ozhio, Akhmeta, Georgia 0906
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src={phone} alt="" className="w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-Gold font-BPGB tracking-[0.25em] uppercase mb-2">
                    ტელეფონი
                  </p>
                  <p className="flex flex-col font-BPGB text-textMuted leading-[1.8] font-light">
                    <a
                      href="tel:+995579882273"
                      className="hover:text-Gold transition-colors"
                    >
                      +995 579 88 22 73
                    </a>
                    <a
                      href="tel:+995579102209"
                      className="hover:text-Gold transition-colors"
                    >
                      +995 579 10 22 09
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-10">
              <div className="flex items-start gap-3">
                <img src={mail} alt="" className="w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-Gold font-BPGB tracking-[0.25em] uppercase mb-2">
                    ელ-ფოსტა
                  </p>
                  <div className="flex flex-col font-BPGB text-textMuted leading-[1.9] font-light">
                    <a
                      href="mailto:arbolishvilimari1409@gmail.com"
                      className="hover:text-Gold transition-colors break-all"
                    >
                      arbolishvilimari1409@gmail.com
                    </a>
                    <a
                      href="mailto:arbolishvilimari@yahoo.com"
                      className="hover:text-Gold transition-colors break-all"
                    >
                      arbolishvilimari@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src={clock} alt="" className="w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-Gold font-BPGB tracking-[0.25em] uppercase mb-2">
                    სამუშაო საათები
                  </p>
                  <div className="font-BPGB text-textMuted leading-[1.8] font-light">
                    <p>ორშაბათი - კვირა</p>
                    <p className="text-Gold/70 text-[13px]">
                      11:00 AM - 08:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
