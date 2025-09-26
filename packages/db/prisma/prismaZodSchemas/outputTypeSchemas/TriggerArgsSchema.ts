import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerSelectSchema } from '../inputTypeSchemas/TriggerSelectSchema';
import { TriggerIncludeSchema } from '../inputTypeSchemas/TriggerIncludeSchema';

export const TriggerArgsSchema: z.ZodType<Prisma.TriggerDefaultArgs> = z.object({
  select: z.lazy(() => TriggerSelectSchema).optional(),
  include: z.lazy(() => TriggerIncludeSchema).optional(),
}).strict();

export default TriggerArgsSchema;
