import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';

export const TriggerKeyStateCompoundUniqueInputSchema: z.ZodType<Prisma.TriggerKeyStateCompoundUniqueInput> = z.object({
  key: z.string(),
  state: z.lazy(() => TriggerStateSchema)
}).strict() as z.ZodType<Prisma.TriggerKeyStateCompoundUniqueInput>;

export default TriggerKeyStateCompoundUniqueInputSchema;
