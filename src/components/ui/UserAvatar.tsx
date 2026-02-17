'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { gradientSchemes } from '@/lib/utils/gradientSchemes';
import { useMemo, useState } from 'react';

type Props = {
  id?: number;
  firstName?: string;
  lastName?: string;
  image?: string | null;
  size?: string; // e.g. "h-10 w-10"
  textSize?: string; // e.g. "text-sm"
};

export const UserAvatar = ({
  firstName = '',
  lastName = '',
  image,
  size = 'h-10 w-10',
  textSize = 'text-sm',
}: Props) => {
  const [imgError, setImgError] = useState(false);

  // 🧩 Compute initials
  const initials =
    `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`.toUpperCase();

  // 🎨 Pick gradient deterministically based on name
  const gradient = useMemo(() => {
    const index =
      ((firstName?.charCodeAt(0) ?? 0) + (lastName?.charCodeAt(0) ?? 0)) %
      gradientSchemes.length;
    return gradientSchemes[index];
  }, [firstName, lastName]);

  return (
    <Avatar
      className={cn(
        'overflow-hidden rounded-full border border-gray-100 object-cover',
        size
      )}
    >
      <AvatarImage
        src={!imgError && image ? image : undefined}
        alt={`${firstName} ${lastName}`}
        onError={() => setImgError(true)}
        className={cn('h-full w-full object-cover', {
          hidden: imgError || !image,
        })}
      />
      <AvatarFallback
        className={cn(
          'flex h-full w-full items-center justify-center font-semibold text-white',
          textSize,
          gradient
        )}
      >
        {initials || '?'}
      </AvatarFallback>
    </Avatar>
  );
};
