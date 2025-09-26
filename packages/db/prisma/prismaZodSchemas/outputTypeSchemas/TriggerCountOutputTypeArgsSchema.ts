import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerCountOutputTypeSelectSchema } from './TriggerCountOutputTypeSelectSchema';

export const TriggerCountOutputTypeArgsSchema: z.ZodType<Prisma.TriggerCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TriggerCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TriggerCountOutputTypeSelectSchema;
