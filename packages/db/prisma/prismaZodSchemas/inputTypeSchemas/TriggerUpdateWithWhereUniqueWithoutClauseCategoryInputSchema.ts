import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutClauseCategoryInputSchema } from './TriggerUpdateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedUpdateWithoutClauseCategoryInputSchema } from './TriggerUncheckedUpdateWithoutClauseCategoryInputSchema';

export const TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutClauseCategoryInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutClauseCategoryInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutClauseCategoryInputSchema) ]),
});

export default TriggerUpdateWithWhereUniqueWithoutClauseCategoryInputSchema;
