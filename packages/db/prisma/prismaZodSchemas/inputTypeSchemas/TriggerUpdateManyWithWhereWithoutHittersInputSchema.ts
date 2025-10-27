import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';
import { TriggerUpdateManyMutationInputSchema } from './TriggerUpdateManyMutationInputSchema';
import { TriggerUncheckedUpdateManyWithoutHittersInputSchema } from './TriggerUncheckedUpdateManyWithoutHittersInputSchema';

export const TriggerUpdateManyWithWhereWithoutHittersInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutHittersInput> = z.strictObject({
  where: z.lazy(() => TriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateManyMutationInputSchema), z.lazy(() => TriggerUncheckedUpdateManyWithoutHittersInputSchema) ]),
});

export default TriggerUpdateManyWithWhereWithoutHittersInputSchema;
