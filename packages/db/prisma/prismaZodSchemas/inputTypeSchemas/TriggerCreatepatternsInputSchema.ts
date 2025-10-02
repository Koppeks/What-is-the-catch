import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TriggerCreatepatternsInputSchema: z.ZodType<Prisma.TriggerCreatepatternsInput> = z.strictObject({
  set: z.string().array(),
});

export default TriggerCreatepatternsInputSchema;
