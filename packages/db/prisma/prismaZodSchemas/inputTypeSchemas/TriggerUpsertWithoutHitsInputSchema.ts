import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerUpdateWithoutHitsInputSchema } from './TriggerUpdateWithoutHitsInputSchema';
import { TriggerUncheckedUpdateWithoutHitsInputSchema } from './TriggerUncheckedUpdateWithoutHitsInputSchema';
import { TriggerCreateWithoutHitsInputSchema } from './TriggerCreateWithoutHitsInputSchema';
import { TriggerUncheckedCreateWithoutHitsInputSchema } from './TriggerUncheckedCreateWithoutHitsInputSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerUpsertWithoutHitsInputSchema: z.ZodType<Prisma.TriggerUpsertWithoutHitsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TriggerUpdateWithoutHitsInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutHitsInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutHitsInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutHitsInputSchema) ]),
  where: z.lazy(() => TriggerWhereInputSchema).optional(),
});

export default TriggerUpsertWithoutHitsInputSchema;
