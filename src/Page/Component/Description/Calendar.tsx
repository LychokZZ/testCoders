import { useMemo, useState } from "react";
import s from "./Description.module.scss";

export type Driver = {
  id: string | number;
  name: string;
  icon?: string;
  experience?: number;
  instagram?: string;
  linkedin?: string;
};

export type Booking = {
  date: string;  
  drivers: Driver[];
};

type Props = {
  bookings: Booking[];
  className?: string;
};

export default function Calendar({ bookings, className }: Props) {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const [modal, setModal] = useState<{
    open: boolean;
    dateISO?: string;
    drivers?: Driver[];
  }>({ open: false });

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const toISO = (d: Date) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
  const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);
  const addDays = (d: Date, days: number) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);

  const startOfGrid = (d: Date) => {
    const first = startOfMonth(d);
    const dow = first.getDay(); 
    return addDays(first, -dow);
  };
  const endOfGrid = (d: Date) => {
    const last = endOfMonth(d);
    const dow = last.getDay();
    return addDays(last, 6 - dow);
  };

  const bookingMap = useMemo(() => {
    const m = new Map<string, Driver[]>();
    for (const b of bookings) m.set(b.date, b.drivers);
    return m;
  }, [bookings]);

  const days = useMemo(() => {
    const start = startOfGrid(current);
    const end = endOfGrid(current);
    const arr: Date[] = [];
    for (let d = start; d <= end; d = addDays(d, 1)) arr.push(d);
    return arr;
  }, [current]);

  const isSameMonth = (d: Date) => d.getMonth() === current.getMonth();
  const monthTitle = new Intl.DateTimeFormat("uk-UA", {
    month: "long",
    year: "numeric",
  }).format(current).toUpperCase();

  const openModal = (dateISO: string, drivers: Driver[]) =>
    setModal({ open: true, dateISO, drivers });

  const closeModal = () => setModal({ open: false });

  return (
    <div className={`${s.cal} ${className ?? ""}`}>
      <div className={s.header}>
        <button
          className={s.nav}
          aria-label="Попередній місяць"
          onClick={() =>
            setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))
          }
        >
          ‹
        </button>
        <div className={s.title}>{monthTitle}</div>
        <button
          className={s.nav}
          aria-label="Наступний місяць"
          onClick={() =>
            setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))
          }
        >
          ›
        </button>
      </div>

      <div className={s.week}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((w) => (
          <div key={w} className={s.weekday}>
            {w}
          </div>
        ))}
      </div>
      <div className={s.grid}>
        {days.map((d) => {
          const iso = toISO(d);
          const drivers = bookingMap.get(iso);
          const booked = !!drivers?.length;
          const muted = !isSameMonth(d);

          return (
            <button
              key={iso}
              className={[
                s.cell,
                muted ? s.isMuted : "",
                booked ? s.isBooked : "",
              ].join(" ")}
              onClick={() => booked && openModal(iso, drivers!)}
              disabled={!booked}
              title={
                booked ? `Рейс: ${drivers!.map((x) => x.name).join(", ")}` : "Немає"
              }
            >
              <span className={s.day}>{d.getDate()}</span>
              {booked && <span className={s.dot} />}
            </button>
          );
        })}
      </div>

      {modal.open && (
        <div className={s.backdrop} onClick={closeModal}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHead}>
              <div className={s.modalTitle}>Рейс: {modal.dateISO}</div>
              <button className={s.close} onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className={s.list}>
              {modal.drivers?.map((dr) => (
                <div key={dr.id} className={s.driver}>
                  <div className={s.avatar}>
                    <img src='./Avatar.jpg' alt={dr.name} />
                  </div>
                  <div className={s.info}>
                    <div className={s.name}>{dr.name}</div>
                    {typeof dr.experience === "number" && (
                      <div className={s.exp}>Досвід: {dr.experience} років</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
