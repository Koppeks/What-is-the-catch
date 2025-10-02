import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TriggerUpdatepatternsInputSchema: z.ZodType<Prisma.TriggerUpdatepatternsInput> = z.strictObject({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
});

export default TriggerUpdatepatternsInputSchema;
