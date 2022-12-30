import type { Position } from '../board'
import type { MoveFunction, Piece, PieceFactory } from './'
import { classifyMoveType, getBasePiece } from './'

export function isKing(value: King | Piece | null): value is King {
  return value?.type === `king`
}

export const kingMoves: MoveFunction = ({
  piece,
  board,
  propagateDetectCheck,
}) => {
  const moves = []

  for (const move of KING_MOVES) {
    const type = classifyMoveType({ piece, board, move, propagateDetectCheck })
    if (type === `invalid`) continue
    moves.push({ position: move, type: type })
  }

  return moves
}

export const createKing = ({ color, id, position }: PieceFactory): King => {
  return {
    hasMoved: false,
    ...getBasePiece({ color, id, type: `king`, position }),
  }
}

export type King = Piece & {
  hasMoved: boolean
}

const KING_MOVES: Position[] = [
  {
    x: 0,
    y: -1,
  },
  {
    x: 0,
    y: 1,
  },
  {
    x: -1,
    y: 0,
  },
  {
    x: 1,
    y: 0,
  },
  {
    x: -1,
    y: -1,
  },
  {
    x: 1,
    y: 1,
  },
  {
    x: -1,
    y: 1,
  },
  {
    x: 1,
    y: -1,
  },
]
