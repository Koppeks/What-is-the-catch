import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClauseCountOutputTypeSelectSchema: z.ZodType<Prisma.ClauseCountOutputTypeSelect> = z.object({
  hits: z.boolean().optional(),
}).strict();

export default ClauseCountOutputTypeSelectSchema;
