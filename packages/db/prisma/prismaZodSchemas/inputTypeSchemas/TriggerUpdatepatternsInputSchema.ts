import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TriggerUpdatepatternsInputSchema: z.ZodType<Prisma.TriggerUpdatepatternsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdatepatternsInput>;

export default TriggerUpdatepatternsInputSchema;
