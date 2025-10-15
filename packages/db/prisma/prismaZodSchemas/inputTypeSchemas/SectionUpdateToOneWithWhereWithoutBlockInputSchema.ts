import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { SectionUpdateWithoutBlockInputSchema } from './SectionUpdateWithoutBlockInputSchema';
import { SectionUncheckedUpdateWithoutBlockInputSchema } from './SectionUncheckedUpdateWithoutBlockInputSchema';

export const SectionUpdateToOneWithWhereWithoutBlockInputSchema: z.ZodType<Prisma.SectionUpdateToOneWithWhereWithoutBlockInput> = z.strictObject({
  where: z.lazy(() => SectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SectionUpdateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlockInputSchema) ]),
});

export default SectionUpdateToOneWithWhereWithoutBlockInputSchema;
