"use client";
import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { LuDiamond } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";

const userToken = JSON.parse(localStorage.getItem("userToken"));
const token = userToken;

const fetchBoards = async () => {
  try {
    const response = await axios.get(
      "https://api.management.parse25proje.link/api/boards",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("Hata: " + error);
    return null;
  }
};

const fetchFlags = async () => {
  try {
    const response = await axios.get(
      "https://api.management.parse25proje.link/api/commons/flags",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    toast.error("Hata: " + error);
    return [];
  }
};

export default function Dnd() {
  const [cards, setCards] = useState([]);
  const [columns, setColumns] = useState([]);
  const [flags, setFlags] = useState([]);
  useEffect(() => {
    const initializeData = async () => {
      const [boardData, flagData] = await Promise.all([
        fetchBoards(),
        fetchFlags(),
      ]);
      if (boardData && flagData) {
        const boards = boardData.data;
        const newColumns = boards.map((board) => ({
          title: board.name,
          column: board.name.toLowerCase().replace(/\s+/g, ""),
        }));
        const newCards = boards.flatMap((board) =>
          board.tasks.map((task) => ({
            title: task.name,
            description: task.description,
            startDate: task.startDate,
            endDate: task.endDate,
            flag: task.flagId,
            id: task.id.toString(),
            column: board.name.toLowerCase().replace(/\s+/g, ""),
          }))
        );
        setColumns(newColumns);
        setCards(newCards);
        setFlags(flagData);
      }
    };
    initializeData();
  }, []);

  const addColumn = (title) => {
    const newColumn = {
      title,
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  return (
    <div className="h-full w-full text-neutral-50">
      <Board
        cards={cards}
        flags={flags}
        columns={columns}
        setCards={setCards}
        addColumn={addColumn}
      />
    </div>
  );
}

const Board = ({ cards, columns, setCards, addColumn, flags }) => {
  return (
    <div className="flex w-full gap-3 p-3">
      {columns.map((col) => (
        <Column
          key={col.column}
          description={col.description}
          title={col.title}
          startDate={col.startDate}
          endDate={col.endDate}
          flag={col.flag}
          column={col.column}
          cards={cards}
          setCards={setCards}
          flags={flags}
        />
      ))}
      <AddColumn addColumn={addColumn} />
    </div>
  );
};

const Column = ({ cards, column, setCards, title, flags }) => {
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
          <button className="text-[#98A2B3] hover:text-black">
            <FiPlus />
          </button>
          <button className="text-[#98A2B3] rounded-full border border-[#98A2B3] hover:text-black">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-[500px] w-full transition-colors overflow-y-auto overflow-x-hidden  ${
          active ? "bg-white opacity-80" : "bg-white"
        }`}
      >
        {filteredCards.map((c) => {
          return (
            <Card
              key={c.id}
              {...c}
              handleDragStart={handleDragStart}
              flags={flags}
            />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const Card = ({
  description,
  id,
  column,
  handleDragStart,
  title,
  startDate,
  endDate,
  flags,
  flag,
}) => {
  const formattedStartDate = startDate ? formatDate(startDate) : "";
  const formattedEndDate = endDate ? formatDate(endDate) : "";
  const flagData = Array.isArray(flags)
    ? flags.find((f) => f.id === flag)
    : null;
  const flagColor = flagData ? flagData.color : "#000000";

  console.log("Card Data:", { title, flag, flagData, flagColor });

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { description, id, column })}
        className="cursor-grab rounded h-auto border border-white-700 bg-white-800 p-3 active:cursor-grabbing shadow-sm"
      >
        <h2 className="text-orange-500">{title}</h2>
        <p className="text-sm text-[#475467]">{description}</p>
        <div className="text-[#98A2B3] flex flex-row items-center py-3 text-xs gap-1">
          <MdOutlineDateRange />
          <span>
            {formattedStartDate} - {formattedEndDate}
          </span>
        </div>
        <div className="text-[#98A2B3] flex flex-row items-center text-xs">
          <LuDiamond />
          <span className="ps-1 pe-3">Milestone Name</span>
          <FaFlag color={flagColor} />
        </div>
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
    const newCard = {
      id: Math.floor(Math.random() * 1000).toString(),
      description: text,
      column: column,
    };

    setCards((prev) => [...prev, newCard]);
    setText("");
    setAdding(false);
  };

  if (!adding) {
    return (
      <button
        onClick={() => setAdding(true)}
        className="m-4 flex flex-row gap-2 items-center p-1 text-[#98A2B3] hover:text-black"
      >
        <FiPlus />
        <span>Add Task</span>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-sm text-neutral-700 rounded w-full border border-neutral-300 p-2"
        placeholder="New Task Name"
      />
      <div className="flex justify-end gap-2 p-1 pt-3">
        <button
          type="button"
          onClick={() => setAdding(false)}
          className="text-sm text-neutral-700 px-3 py-1 rounded hover:bg-neutral-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-sm bg-[#175CD3] text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

const AddColumn = ({ addColumn }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addColumn(text.trim());
      setText("");
      setAdding(false);
    }
  };

  if (!adding) {
    return (
      <button
        onClick={() => setAdding(true)}
        className="flex items-center justify-center text-xl flex-col gap-2 w-80 shrink-0 border rounded-t-lg rounded-b-lg bg-white px-1 text-[#98A2B3]"
      >
        <FiPlus />
        Add Board
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-start text-xl flex-col gap-2 w-80 shrink-0 border rounded-t-lg rounded-b-lg bg-white"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-neutral-700 rounded w-auto border border-neutral-300 p-2 text-xl my-5 mx-4"
        placeholder="New Column Title"
      />
      <div className="flex justify-end gap-2 p-1 pt-3">
        <button
          type="button"
          onClick={() => setAdding(false)}
          className="text-sm text-neutral-700 px-3 py-1 rounded hover:bg-neutral-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-sm bg-[#175CD3] text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};
