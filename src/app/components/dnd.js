"use client";
import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { motion } from "framer-motion";

const DEFAULT_CARDS = [
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  {
    title:
      "Research DB options for new microserviceResearch DB options for new microserviceResearch DB options for new microserviceResearch DB options for new microservice",
    id: "8",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

const DEFAULT_COLUMNS = [
  { title: "TODO", column: "todo" },
  { title: "In progress", column: "doing" },
  { title: "Complete", column: "done" },
  { title: "Deneme", column: "deneme" },
];

export default function Dnd() {
  return (
    <div className="h-full w-full  text-neutral-50">
      <Board />
    </div>
  );
}

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);

  const addColumn = (title) => {
    const newColumn = {
      title,
      column: title.toLowerCase().replace(/\s+/g, ""),
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  return (
    <div className="flex  w-full gap-3 p-3">
      {columns.map((col) => (
        <Column
          key={col.column}
          title={col.title}
          column={col.column}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <AddColumn addColumn={addColumn} />
    </div>
  );
};

const Column = ({ title, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-80 shrink-0 border rounded-t-lg rounded-b-lg bg-white px-1">
      <div className="mb-3 flex items-center justify-between px-4 py-5 ">
        <div className="flex flex-row gap-2 text-center justify-center items-center ">
          <h3 className={`text-[#4E5BA6] text-base font-normal`}>{title}</h3>
          <div className="w-5 h-5 text-[#175CD3] border-[#B2DDFF] bg-[#eff7fe] rounded-full border   text-xs flex items-center justify-center">
            <span>{filteredCards.length}</span>
          </div>
        </div>
        <div className="flex gap-3 flex-row">
          <button className="text-[#98A2B3]">
            <FiPlus />
          </button>
          <button className="text-[#98A2B3] rounded-full border border-[#98A2B3]">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-[500px] w-full transition-colors overflow-y-auto overflow-x-hidden  ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded h-auto border border-white-700 bg-white-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-[#475467]">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const AddColumn = ({ addColumn }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    addColumn(text.trim());

    setText("");
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Column title..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex flex-col items-center gap-1.5 py-1.5 font-medium text-xl text-neutral-400 transition-colors hover:text-gray-500 w-80 shrink-0 border rounded-t-lg rounded-b-lg bg-white px-1 justify-center"
        >
          <FiPlus size={"24px"} />
          <span>Add Board</span>
        </motion.button>
      )}
    </>
  );
};
