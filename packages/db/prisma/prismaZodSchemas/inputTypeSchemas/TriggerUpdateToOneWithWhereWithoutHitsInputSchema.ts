import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';
import { TriggerUpdateWithoutHitsInputSchema } from './TriggerUpdateWithoutHitsInputSchema';
import { TriggerUncheckedUpdateWithoutHitsInputSchema } from './TriggerUncheckedUpdateWithoutHitsInputSchema';

export const TriggerUpdateToOneWithWhereWithoutHitsInputSchema: z.ZodType<Prisma.TriggerUpdateToOneWithWhereWithoutHitsInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutHitsInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutHitsInputSchema) ]),
});

export default TriggerUpdateToOneWithWhereWithoutHitsInputSchema;
