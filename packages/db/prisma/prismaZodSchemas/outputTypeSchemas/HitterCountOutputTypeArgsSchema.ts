import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterCountOutputTypeSelectSchema } from './HitterCountOutputTypeSelectSchema';

export const HitterCountOutputTypeArgsSchema: z.ZodType<Prisma.HitterCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HitterCountOutputTypeSelectSchema).nullish(),
}).strict();

export default HitterCountOutputTypeSelectSchema;
