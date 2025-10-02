import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';

export const TriggerKeyStateCompoundUniqueInputSchema: z.ZodType<Prisma.TriggerKeyStateCompoundUniqueInput> = z.strictObject({
  key: z.string(),
  state: z.lazy(() => TriggerStateSchema),
});

export default TriggerKeyStateCompoundUniqueInputSchema;
