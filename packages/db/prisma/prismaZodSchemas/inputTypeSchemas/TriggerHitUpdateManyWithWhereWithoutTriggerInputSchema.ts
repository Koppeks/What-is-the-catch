import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitScalarWhereInputSchema } from './TriggerHitScalarWhereInputSchema';
import { TriggerHitUpdateManyMutationInputSchema } from './TriggerHitUpdateManyMutationInputSchema';
import { TriggerHitUncheckedUpdateManyWithoutTriggerInputSchema } from './TriggerHitUncheckedUpdateManyWithoutTriggerInputSchema';

export const TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitUpdateManyWithWhereWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => TriggerHitScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerHitUpdateManyMutationInputSchema), z.lazy(() => TriggerHitUncheckedUpdateManyWithoutTriggerInputSchema) ]),
});

export default TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema;
