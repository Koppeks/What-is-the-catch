import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutHeadingBlockInputSchema } from './SectionUpdateWithoutHeadingBlockInputSchema';
import { SectionUncheckedUpdateWithoutHeadingBlockInputSchema } from './SectionUncheckedUpdateWithoutHeadingBlockInputSchema';

export const SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUpdateWithWhereUniqueWithoutHeadingBlockInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SectionUpdateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutHeadingBlockInputSchema) ]),
});

export default SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema;
