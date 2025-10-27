import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutHittersInputSchema } from './TriggerUpdateWithoutHittersInputSchema';
import { TriggerUncheckedUpdateWithoutHittersInputSchema } from './TriggerUncheckedUpdateWithoutHittersInputSchema';

export const TriggerUpdateWithWhereUniqueWithoutHittersInputSchema: z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutHittersInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutHittersInputSchema) ]),
});

export default TriggerUpdateWithWhereUniqueWithoutHittersInputSchema;
