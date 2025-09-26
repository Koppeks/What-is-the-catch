import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TriggerCreatepatternsInputSchema: z.ZodType<Prisma.TriggerCreatepatternsInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.TriggerCreatepatternsInput>;

export default TriggerCreatepatternsInputSchema;
