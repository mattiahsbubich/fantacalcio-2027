import type { RatingValue } from '../types/playerProfile';

interface PlayerRatingProps {
  value: RatingValue | null;
  editable?: boolean;
  label?: string;
  onChange?: (
    value: RatingValue | null
  ) => void;
}

function getRatingClass(
  value: RatingValue
) {
  if (value === 4) {
    return 'rating-good';
  }

  if (value === 3) {
    return 'rating-medium';
  }

  return 'rating-low';
}

function PlayerRating({
  value,
  editable = false,
  label,
  onChange
}: PlayerRatingProps) {
  function handleClick(
    clickedValue: RatingValue
  ) {
    if (!editable || !onChange) {
      return;
    }

    if (value === clickedValue) {
      onChange(null);
      return;
    }

    onChange(clickedValue);
  }

  return (
    <div className="player-rating">
      {label && (
        <span className="player-rating__label">
          {label}
        </span>
      )}

      <div
        className={`rating-bars ${
          value
            ? getRatingClass(value)
            : 'rating-empty'
        }`}
        aria-label={
          value
            ? `${value} tacche su 4`
            : 'Valore non impostato'
        }
      >
        {(
          [1, 2, 3, 4] as RatingValue[]
        ).map((bar) => (
          <button
            key={bar}
            type="button"
            disabled={!editable}
            className={
              value !== null &&
              bar <= value
                ? 'filled'
                : ''
            }
            onClick={() =>
              handleClick(bar)
            }
            aria-label={
              editable
                ? `Imposta ${bar} tacche`
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}

export default PlayerRating;