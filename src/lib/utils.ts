// src/lib/utils.ts

// Utility function to conditionally join class names
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Utility function to format a date string
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  return date.toLocaleDateString(undefined, options);
};

