import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCountOutputTypeSelectSchema } from './ClauseCountOutputTypeSelectSchema';

export const ClauseCountOutputTypeArgsSchema: z.ZodType<Prisma.ClauseCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClauseCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ClauseCountOutputTypeSelectSchema;
